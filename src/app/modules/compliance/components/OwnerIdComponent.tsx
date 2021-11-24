import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {CountryModel} from '../../merchant'
import {Link} from 'react-router-dom'
type Props = {
  onSetOwnerStep: () => void
  setActiveStep: Function
  activeStep: number
  countries: CountryModel[]
}
const initialValues = {
  firstName: '',
  lastName: '',
  nationality: '',
  identification: '',
  homeidentification: '',
  identidocumentnumber: '',
  identificationfile: '',
  homeidentificationfile: '',
  officeAddress: '',
  homeAddress: '',
}

const owwnerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last Name is required'),
  nationality: Yup.string().min(1, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols'),
  identification: Yup.string()
    .min(1, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Means of Identifcation Required'),
  homeidentification: Yup.string()
    .min(1, 'Minimum 3 symbols')
    .max(100, 'Maximum 50 symbols')
    .required('Means of Identifcation Required'),
  identidocumentnumber: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Identification Number Required'),
  // identificationfile: Yup.mixed()
  //   .test('fileSize', 'The file is too large', (value) => {
  //     if (value === undefined) return false
  //     else if (!value.length) return true // attachment is optional
  //     return value[0].size <= 2000000
  //   })
  //   .required('File is required'),
  // homeidentificationfile: Yup.mixed()
  //   .test('fileSize', 'The file is too large', (value) => {
  //     if (value === undefined) return false
  //     else if (!value.length) return true // attachment is optional
  //     return value[0].size <= 2000000
  //   })
  //   .required('File is required'),
  officeAddress: Yup.string()
    .min(5, 'Minimum 3 symbols')
    .max(500, 'Maximum 50 symbols')
    .required('Office Address Required'),
  homeAddress: Yup.string()
    .min(5, 'Minimum 3 symbols')
    .max(500, 'Maximum 50 symbols')
    .required('Home Address Required'),
  // facebook: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols'),
  // officeAddress: Yup.string().min(5, 'Minimum 5 symbols').max(500, 'Maximum 500 symbols'),
})
const OwnerIdComponent: React.FC<Props> = ({
  setActiveStep,
  activeStep,
  countries,
  onSetOwnerStep,
}) => {
  const [moveowner, setMoveOwner] = useState(false)
  useEffect(() => {
    if (moveowner === true) {
      onSetOwnerStep()
      // setActiveStep(activeStep + 1)
    }
  })
  const formik = useFormik({
    initialValues,
    validationSchema: owwnerSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setMoveOwner(true)
      setSubmitting(true)
      setTimeout(() => {
        // onClick={() => setActiveStep(activeStep + 1)}
        // let data = {
        //   emailAddress: values.emailAddress,
        //   firstName: values.firstName,
        //   lastName: values.lastName,
        //   phoneNumber: values.phoneNumber,
        // } as ProfileModel
        // createCustomer(data)
        //   .then((res) => {
        //     Swal.fire({
        //       title: 'Success!',
        //       text: 'Invoice Created Successfully',
        //       icon: 'success',
        //       confirmButtonText: 'Ok',
        //     } as SweetAlertOptions).then(() => {
        //       setLoading(false)
        //       resetForm()
        //     })
        //   })
        //   .catch((e) => {
        //     setLoading(false)
        //     setSubmitting(false)
        //     if (e.response) {
        //       setStatus(e.response.data.message)
        //     } else if (e.request) {
        //       setStatus('The Customer page detail is incorrect')
        //     } else {
        //       setStatus('The Customer page detail is incorrect')
        //     }
        //   })
      }, 1000)
    },
  })
  return (
    <section>
      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div></div>
      )}
      <h4 className='mb-3'>Owner Identification</h4>
      <form onSubmit={formik.handleSubmit} noValidate id='kt_ownerid_form'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='mb-5'>
              <input
                type='text'
                autoComplete='off'
                className={clsx(
                  'form-control',
                  {'is-invalid': formik.touched.firstName && formik.errors.firstName},
                  {
                    'is-valid': formik.touched.firstName && !formik.errors.firstName,
                  }
                )}
                id='exampleFormControlInput1'
                placeholder='First Name'
                {...formik.getFieldProps('firstName')}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.firstName}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='col-md-6'>
            <div className='mb-5'>
              <input
                type='text'
                className={clsx(
                  'form-control',
                  {'is-invalid': formik.touched.lastName && formik.errors.lastName},
                  {
                    'is-valid': formik.touched.lastName && !formik.errors.lastName,
                  }
                )}
                id='exampleFormControlInput1'
                placeholder='Last Name'
                {...formik.getFieldProps('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.lastName}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <select
            placeholder='Nationality'
            autoComplete='off'
            {...formik.getFieldProps('nationality')}
            className={clsx(
              'form-select form-control-lg form-control-solid',
              {'is-invalid': formik.touched.nationality && formik.errors.nationality},
              {
                'is-valid': formik.touched.nationality && !formik.errors.nationality,
              }
            )}
          >
            <option value=''>Select Country</option>
            {countries &&
              countries.map((x) => (
                <option value={x.countrycode.toString()} key={x.countrycode.toString()}>
                  {x.name}
                </option>
              ))}
          </select>
          {formik.touched.nationality && formik.errors.nationality && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.nationality}</span>
              </div>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <select
            className={clsx(
              'form-select form-control-lg form-control-solid',
              {'is-invalid': formik.touched.identification && formik.errors.identification},
              {
                'is-valid': formik.touched.identification && !formik.errors.identification,
              }
            )}
            {...formik.getFieldProps('identification')}
          >
            <option value=''>Select a Identification Doc</option>
            <option value='IP'>International Passport</option>
            <option value='DL'>Driver's License</option>
            <option value='VC'>Voters Card</option>
            <option value='NID'>National Identification Card</option>
          </select>
          {formik.touched.identification && formik.errors.identification && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.identification}</span>
              </div>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <input
            type='text'
            className={clsx(
              'form-select form-control-lg form-control-solid',
              {
                'is-invalid':
                  formik.touched.identidocumentnumber && formik.errors.identidocumentnumber,
              },
              {
                'is-valid':
                  formik.touched.identidocumentnumber && !formik.errors.identidocumentnumber,
              }
            )}
            id='exampleFormControlInput1'
            {...formik.getFieldProps('identidocumentnumber')}
            placeholder='Enter the number on the identification documents'
          />
          {formik.touched.identidocumentnumber && formik.errors.identidocumentnumber && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.identidocumentnumber}</span>
              </div>
            </div>
          )}
        </div>
        <div className='mb-5 text-center'>
          <p className='fw-bold'>Upload a copy of the selected ID</p>
          <input
            className='form-control form-control-sm'
            {...formik.getFieldProps('homeidentificationfile')}
            id='formFileSm'
            type='file'
            accept='image/*'
          />
        </div>
        <div className='mb-5'>
          <p>Home Address</p>
        </div>
        <div className='mb-5'>
          <input
            type='text'
            {...formik.getFieldProps('homeAddress')}
            className={clsx(
              'form-select form-control-lg form-control-solid',
              {
                'is-invalid': formik.touched.homeAddress && formik.errors.homeAddress,
              },
              {
                'is-valid': formik.touched.homeAddress && !formik.errors.homeAddress,
              }
            )}
            id='exampleFormControlInput1'
            placeholder='Type Address Here'
          />
          {formik.touched.homeAddress && formik.errors.homeAddress && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.homeAddress}</span>
              </div>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <select
            className={clsx(
              'form-select form-control-lg form-control-solid',
              {'is-invalid': formik.touched.homeidentification && formik.errors.homeidentification},
              {
                'is-valid': formik.touched.homeidentification && !formik.errors.homeidentification,
              }
            )}
            {...formik.getFieldProps('homeidentification')}
          >
            <option value=''>Select a Identification Doc</option>
            <option value='BS'>Bank Statement</option>
            <option value='UB'>Utility Bill</option>
            <option value='TA'>Tax Assessment</option>
            <option value='CTB'>Cable TV Bill</option>
          </select>
          <span className='text-muted'>(Not less than 6 months old)</span>
          {formik.touched.homeidentification && formik.errors.homeidentification && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.homeidentification}</span>
              </div>
            </div>
          )}
        </div>
        <div className='mb-5 text-center'>
          <p className='fw-bold'>Upload a copy of the selected ID</p>
          <input
            className='form-control form-control-sm'
            // {...formik.getFieldProps('homeidentificationfile')}
            id='formFileSm'
            type='file'
            accept='image/*'
          />
        </div>
        <span className='text-muted'>
          To learn more about what other documents that can be used as proof of address.{' '}
          <Link to='/dashboard'> learn more </Link>
        </span>
        <div className='mb-5 text-center'>
          <button
            className='btn btn-warning'
            onClick={() => setActiveStep(activeStep - 1)}
            type='button'
          >
            prev
          </button>
          <button className='btn btn-warning' type='submit'>
            Next
          </button>
          {/* <button
            className='btn-learning btn btn-warning'
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Save
          </button> */}
        </div>
      </form>
    </section>
  )
}

export default OwnerIdComponent
