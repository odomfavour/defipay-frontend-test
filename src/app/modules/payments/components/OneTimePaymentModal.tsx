import {Modal} from 'react-bootstrap-v5'
import {useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {createOneTimePaymentPage, OneTimePaymentDtoModel} from '..'
import SuccessModal from './SuccessModal'
const initialValues = {
  pagename: '',
  email: '',
  description: '',
  redirectLink: '',
  successmessage: '',
  amount: 0,
  paidby: '',
}

const otpaySchema = Yup.object().shape({
  pagename: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  description: Yup.string()
    .min(3, 'Minimum 3 letters')
    .max(500, 'Maximum 50 letters')
    .required('Description is required'),
  paidby: Yup.string().required('Who Pays for the charge is required'),
  redirectLink: Yup.string().required('Redirect Link is required'),
  successmessage: Yup.string().required('Success message is required'),
})

const OneTimePaymentModal = (props: {
  show: boolean
  handleClose: () => void
  openSuccess: () => void
  handleReferesh: () => void
}) => {
  const [loading, setLoading] = useState(false)
  const [showLink, setLinkShow] = useState(false)
  const [link, setLink] = useState('')
  const [hideModal, setHideModal] = useState(false)
  const handleClose = () => {
    setLinkShow(false)
  }
  //const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: otpaySchema,
    onSubmit: (values, {setStatus, setSubmitting, resetForm}) => {
      setLoading(true)
      setTimeout(() => {
        console.log(values.paidby)

        let data = {
          pagename: values.pagename,
          emailaddress: values.email,
          description: values.description,
          redirectLink: values.redirectLink,
          successmessage: values.successmessage,
          paidBy: values.paidby,
          amount: values.amount,
        } as OneTimePaymentDtoModel
        createOneTimePaymentPage(data)
          .then((res) => {
            console.log(res.data)
            setLink(res.data.data)
            setLoading(false)
            setLinkShow(true)
            setHideModal(true)
            resetForm()
            props.handleReferesh()
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            if (e.response) {
              setStatus(e.response.data.message)
            } else if (e.request) {
              setStatus('The payment page detail is incorrect')
            } else {
              setStatus('The payment page detail is incorrect')
            }
          })
      }, 1000)
    },
  })
  return (
    <>
      <div>
        <Modal
          className='modal fade'
          id='exampleModal'
          aria-labelledby='exampleModalLabel'
          size='lg'
          centered
          aria-hidden='true'
          show={hideModal === false ? props.show : false}
          onHide={props.handleClose}
        >
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Subscribe
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={props.handleClose}
            ></button>
          </div>
          <div className='modal-lg'>
            <div className='modal-content'>
              <div className='modal-body'>
                <h3 className='text-center'>New Payment Page</h3>
                {formik.status ? (
                  <div className='mb-lg-15 alert alert-danger'>
                    <div className='alert-text font-weight-bold'>{formik.status}</div>
                  </div>
                ) : (
                  <div></div>
                )}
                <form onSubmit={formik.handleSubmit} noValidate id='kt_login_signin_form'>
                  <div className='mb-5'>
                    <input
                      type='text'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.pagename && formik.errors.pagename},
                        {
                          'is-valid': formik.touched.pagename && !formik.errors.pagename,
                        }
                      )}
                      id='pagename'
                      placeholder='Page Name'
                      autoComplete='off'
                      {...formik.getFieldProps('pagename')}
                    />
                    {formik.touched.pagename && formik.errors.pagename && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.pagename}</span>
                      </div>
                    )}
                  </div>
                  <div className='mb-5'>
                    <input
                      type='text'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.description && formik.errors.description},
                        {
                          'is-valid': formik.touched.description && !formik.errors.description,
                        }
                      )}
                      id='exampleFormControlInput1'
                      placeholder='Description'
                      {...formik.getFieldProps('description')}
                    />
                    {formik.touched.description && formik.errors.description && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.description}</span>
                      </div>
                    )}
                  </div>
                  <div className='mb-5'>
                    <input
                      type='number'
                      step='.01'
                      min='100.00'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.amount && formik.errors.amount},
                        {
                          'is-valid': formik.touched.amount && !formik.errors.amount,
                        }
                      )}
                      id='fixedamount'
                      placeholder='Set a fixed payment on this page'
                      {...formik.getFieldProps('amount')}
                    />
                    {formik.touched.amount && formik.errors.amount && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.amount}</span>
                      </div>
                    )}
                  </div>
                  <div className='mb-5' role='group'>
                    <h3>Select Who Pays for the charges</h3>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        id='inlineRadio1'
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.paidby === '1'}
                        name='paidby'
                      />
                      <label className='form-check-label' htmlFor='inlineRadio1'>
                        Customer
                      </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='paidby'
                        id='inlineRadio2'
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.paidby === '2'}
                      />
                      <label className='form-check-label' htmlFor='inlineRadio1'>
                        Merchant
                      </label>
                    </div>

                    {formik.touched.paidby && formik.errors.paidby && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.paidby}</span>
                      </div>
                    )}
                  </div>
                  <div className='mb-5'>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        id='inlineCheckbox1'
                        value='option1'
                      />
                      <label className='form-check-label' htmlFor='inlineCheckbox1'>
                        Collect phone numbers on this page
                      </label>
                    </div>
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='exampleFormControlInput1' className='form-label'>
                      Redirect after payment
                    </label>
                    <input
                      type='text'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.redirectLink && formik.errors.redirectLink},
                        {
                          'is-valid': formik.touched.redirectLink && !formik.errors.redirectLink,
                        }
                      )}
                      id='exampleFormControlInput1'
                      placeholder='https://redirect.link instagram'
                      {...formik.getFieldProps('redirectLink')}
                    />
                    {formik.touched.redirectLink && formik.errors.redirectLink && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.redirectLink}</span>
                      </div>
                    )}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='exampleFormControlInput1' className='form-label'>
                      Success message
                    </label>
                    <input
                      type='text'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {
                          'is-invalid':
                            formik.touched.successmessage && formik.errors.successmessage,
                        },
                        {
                          'is-valid':
                            formik.touched.successmessage && !formik.errors.successmessage,
                        }
                      )}
                      id='exampleFormControlInput1'
                      placeholder='Message to show after payment'
                      {...formik.getFieldProps('successmessage')}
                    />
                    {formik.touched.successmessage && formik.errors.successmessage && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.successmessage}</span>
                      </div>
                    )}
                  </div>
                  <div className='mb-5'>
                    <label htmlFor='exampleFormControlInput1' className='form-label'>
                      Send notification to
                    </label>
                    <input
                      type='email'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.email && formik.errors.email},
                        {
                          'is-valid': formik.touched.email && !formik.errors.email,
                        }
                      )}
                      id='exampleFormControlInput1'
                      placeholder='Email address'
                      {...formik.getFieldProps('email')}
                    />
                  </div>
                  <div className='text-center my-5'>
                    <button
                      className='btn btn-light'
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      Cancel
                    </button>
                    <button
                      className='btn btn-warning'
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      {!loading && <span className='indicator-label'>Create</span>}

                      {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
                          Please wait...
                          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div>
        {showLink && <SuccessModal handleClose={handleClose} show={showLink} link={link} />}
      </div>
    </>
  )
}

export default OneTimePaymentModal
