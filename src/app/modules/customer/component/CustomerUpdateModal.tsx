import {useState} from 'react'
import {Modal} from 'react-bootstrap-v5'
import Swal, {SweetAlertOptions} from 'sweetalert2'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {CustomerDtoModel, CustomerViewModel, updateCustomer} from '..'
import * as customerActions from '../../customer/redux/CustomerActions'
import {useDispatch} from 'react-redux'
// const initialValues = {
//   firstName: '',
//   lastName: '',
//   phoneNumber: '',
//   emailAddress: '',
// }
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
const CustomerUpdateModal = (props: {
  show: boolean
  data: CustomerViewModel | undefined
  handleClose: () => void
  openCustomerUpdate: () => void
  onUpdateSuccess: () => void
}) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  console.log('data', props.data)
  const formik = useFormik({
    initialValues: {
      firstName: props.data?.firstName.toString() || '',
      lastName: props.data?.lastName.toString() || '',
      phoneNumber: props.data?.phoneNumber.toString() || '',
      emailAddress: props.data?.emailAddress.toString() || '',
    },
    validationSchema: customerSchema,
    enableReinitialize: true,
    onSubmit: (values, {setStatus, setSubmitting, resetForm}) => {
      setLoading(true)
      setTimeout(() => {
        let data = {
          emailAddress: values.emailAddress,
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
        } as CustomerDtoModel
        updateCustomer(data, Number(props.data?.customerId))
          .then((res) => {
            dispatch(customerActions.actions.getcustomers)
            Swal.fire({
              title: 'Success!',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Ok',
            } as SweetAlertOptions).then(() => {
              setLoading(false)
              props.handleClose()
              props.onUpdateSuccess()
              resetForm()
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

  // useEffect(() => {
  //   // const fields = ['customerId', 'firstName', 'lastName', 'emailAddress', 'phoneNumber']
  //   formik.setFieldValue('firstName', props.data?.firstName, false)
  //   // fields.forEach((field) => formik.setFieldValue(field, props.data[field], false))
  //   // if (!isAddMode) {
  //   //   // get user and set form fields
  //   //   userService.getById(id).then((user) => {
  //   //     const fields = ['title', 'firstName', 'lastName', 'email', 'role']
  //   //     fields.forEach((field) => setFieldValue(field, user[field], false))
  //   //     setUser(user)
  //   //   })
  //   // }
  // })

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
            Update Customer
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
                      // {...formik.setFieldValue('firstName', props.data?.firstName)}
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
                    {!loading && <span className='indicator-label'>Submit</span>}

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

export default CustomerUpdateModal
