import {useState} from 'react'
import {Modal} from 'react-bootstrap-v5'
import Swal, {SweetAlertOptions} from 'sweetalert2'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {createCustomer, CustomerDtoModel} from '..'
const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  emailAddress: '',
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const customerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last Name is required'),
  emailAddress: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
})
const CustomerCreationModal = (props: {
  show: boolean
  handleClose: () => void
  openCustomerCreate: () => void
  onCreateSuccess: () => void
}) => {
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: customerSchema,
    onSubmit: (values, {setStatus, setSubmitting, resetForm}) => {
      setLoading(true)
      setTimeout(() => {
        let data = {
          emailAddress: values.emailAddress,
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
        } as CustomerDtoModel
        createCustomer(data)
          .then((res) => {
            Swal.fire({
              title: 'Success!',
              text: 'Invoice Created Successfully',
              icon: 'success',
              confirmButtonText: 'Ok',
            } as SweetAlertOptions).then(() => {
              setLoading(false)
              resetForm()
              props.onCreateSuccess()
              props.handleClose()
            })
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            if (e.response) {
              setStatus(e.response.data.message)
            } else if (e.request) {
              setStatus('The Customer page detail is incorrect')
            } else {
              setStatus('The Customer page detail is incorrect')
            }
          })
      }, 1000)
    },
  })
  return (
    <div>
      <Modal
        className='modal fade'
        id='exampleModal'
        aria-labelledby='exampleModalLabel'
        size='lg'
        centered
        aria-hidden='true'
        show={props.show}
        onHide={props.handleClose}
      >
        <div className='modal-header'>
          <h5 className='modal-title' id='exampleModalLabel'>
            Create Customer
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
              <form onSubmit={formik.handleSubmit} noValidate id='kt_customer_creation_form'>
                <div className='px-5'>
                  <div className='mb-4'>
                    <label htmlFor='firstName' className='form-label'>
                      First Name
                    </label>
                    <input
                      type='text'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.firstName && formik.errors.firstName},
                        {
                          'is-valid': formik.touched.firstName && !formik.errors.firstName,
                        }
                      )}
                      id='firstName'
                      placeholder='First Name'
                      autoComplete='off'
                      {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.firstName}</span>
                      </div>
                    )}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='lastName' className='form-label'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.lastName && formik.errors.lastName},
                        {
                          'is-valid': formik.touched.lastName && !formik.errors.lastName,
                        }
                      )}
                      id='lastName'
                      placeholder='Last Name'
                      autoComplete='off'
                      {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.lastName}</span>
                      </div>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='emailAddress' className='form-label'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.emailAddress && formik.errors.emailAddress},
                        {
                          'is-valid': formik.touched.emailAddress && !formik.errors.emailAddress,
                        }
                      )}
                      id='emailAddress'
                      placeholder='name@example.com'
                      autoComplete='off'
                      {...formik.getFieldProps('emailAddress')}
                    />
                    {formik.touched.emailAddress && formik.errors.emailAddress && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.emailAddress}</span>
                      </div>
                    )}
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='phoneNumber' className='form-label'>
                      Phone Number
                    </label>
                    <input
                      type='text'
                      className={clsx(
                        'form-control form-control-lg form-control-solid',
                        {'is-invalid': formik.touched.phoneNumber && formik.errors.phoneNumber},
                        {
                          'is-valid': formik.touched.phoneNumber && !formik.errors.phoneNumber,
                        }
                      )}
                      id='phoneNumber'
                      placeholder='+2348060000000'
                      autoComplete='off'
                      {...formik.getFieldProps('phoneNumber')}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.phoneNumber}</span>
                      </div>
                    )}
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
  )
}

export default CustomerCreationModal
