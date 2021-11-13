import {Modal} from 'react-bootstrap-v5'
import {useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {useDispatch} from 'react-redux'
import {createInvoice, InvoiceDtoModel} from '..'
// import SuccessModal from './SuccessModal'
const initialValues = {
  notes: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  amount: 0,
  type: 0,
}

const invoiceSchema = Yup.object().shape({
  notes: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  firstName: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastName: Yup.string()
    .min(3, 'Minimum 3 letters')
    .max(500, 'Maximum 50 letters')
    .required('Description is required'),
  paidby: Yup.string().required('Who Pays for the charge is required'),
  redirectLink: Yup.string().required('Redirect Link is required'),
  successmessage: Yup.string().required('Success message is required'),
})

const InvoiceCreationModal = (props: {
  show: boolean
  handleClose: () => void
  openSuccess: () => void
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
    validationSchema: invoiceSchema,
    onSubmit: (values, {setStatus, setSubmitting, resetForm}) => {
      setLoading(true)
      setTimeout(() => {
        let data = {
          notes: values.notes,
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          amount: values.amount,
          type: values.type,
        } as InvoiceDtoModel
        createInvoice(data)
          .then((res) => {
            console.log(res.data)
            setLink(res.data.data)
            setLoading(false)
            setLinkShow(true)
            setHideModal(true)
            resetForm()
            console.log('saved')
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            if (e.response) {
              setStatus(e.response.data.message)
            } else if (e.request) {
              setStatus('The invoice page detail is incorrect')
            } else {
              setStatus('The invoice page detail is incorrect')
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
            <h5 className='modal-title justify-content-center' id='exampleModalLabel'>
              What type of invoice you want to create?
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
                {formik.status ? (
                  <div className='mb-lg-15 alert alert-danger'>
                    <div className='alert-text font-weight-bold'>{formik.status}</div>
                  </div>
                ) : (
                  <div></div>
                )}
                <form onSubmit={formik.handleSubmit} noValidate id='kt_login_signin_form'>
                  <div className='mb-5' role='group'>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        id='inlineRadio1'
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.type === 1}
                        name='type'
                      />
                      <label className='form-check-label' htmlFor='inlineRadio1'>
                        Simple Invoice
                      </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='type'
                        id='inlineRadio2'
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.type === 2}
                      />
                      <label className='form-check-label' htmlFor='inlineRadio1'>
                        Detailed Invoice
                        <span className='text-muted'>
                          This page will be deleted and the link will be freed for us
                        </span>
                      </label>
                    </div>

                    {formik.touched.type && formik.errors.type && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.type}</span>
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
        {/* {showLink && <SuccessModal handleClose={handleClose} show={showLink} link={link} />} */}
      </div>
    </>
  )
}

export default InvoiceCreationModal
