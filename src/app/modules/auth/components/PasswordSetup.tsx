/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import * as authactions from '../redux/AuthActions'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {register} from '../redux/AuthCRUD'
import {Redirect} from 'react-router'

const initialValues = {
  password: '',
  confirmPassword: '',
  email: '',
  businessname: '',
  countrycode: '',
}

const passwordSetupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Minimum 8 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
})
export function PasswordSetup() {
  const [loading, setLoading] = useState(false)
  const businessname = localStorage.getItem('businessname')
  const emailaddress = localStorage.getItem('email')
  const countrycode = localStorage.getItem('countrycode')
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: passwordSetupSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        //Get the Saved data in local storage
        // To retrieve data
        values.businessname = businessname !== null ? businessname.toString() : ''
        values.email = emailaddress !== null ? emailaddress.toString() : ''
        values.countrycode = countrycode !== null ? countrycode.toString() : ''
        if (values.businessname === null || values.businessname === '') {
          setStatus('Registration process has broken')
        }

        if (values.email === null || values.email === '') {
          setStatus('Registration process has broken')
        }

        if (values.countrycode === null || values.countrycode === '') {
          setStatus('Registration process has broken')
        }
        // To clear a specific item
        // localStorage.removeItem('Name')
        register(values.email, values.businessname, values.countrycode, values.password)
          .then((res) => {
            console.log(res.data)
            if (res.data.success) {
              setLoading(false)
              window.location.href = `/auth/verifyemail/${res.data.data.userid}`
              //dispatch(authactions.actions.confirmemail(accessToken))
            }
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            if (e.response) {
              setStatus(e.response.data.message)
            } else if (e.request) {
              setStatus('Registration process has broken')
            } else {
              setStatus('Registration process has broken')
            }
          })
      }, 1000)
    },
  })
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])
  return (
    <>
      <div
        className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
        style={{
          backgroundColor: '#333067',
        }}
      >
        {/* begin::Content */}
        <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
          {/* begin::Logo */}
          <h2 className='mb-12' style={{color: 'white'}}>
            DefiPay
          </h2>
          <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
            <form
              className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
              noValidate
              id='kt_login_password_setup_form'
              onSubmit={formik.handleSubmit}
            >
              <div className='text-center mb-10'>
                <h1 className='text-dark mb-3'>Setup Password</h1>
              </div>
              {/* end::Heading */}
              {formik.status && (
                <div className='mb-lg-15 alert alert-danger'>
                  <div className='alert-text font-weight-bold'>{formik.status}</div>
                </div>
              )}
              {/* begin::Form group */}
              <div className='fv-row mb-10'>
                <label className='form-label fw-bolder text-gray-900 fs-6'>Password</label>
                <input
                  type='password'
                  placeholder=''
                  autoComplete='off'
                  {...formik.getFieldProps('password')}
                  className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {'is-invalid': formik.touched.password && formik.errors.password},
                    {
                      'is-valid': formik.touched.password && !formik.errors.password,
                    }
                  )}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.password}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

              {/* begin::Form group */}
              <div className='fv-row mb-10'>
                <label className='form-label fw-bolder text-gray-900 fs-6'>Confirm Password</label>
                <input
                  type='password'
                  placeholder=''
                  autoComplete='off'
                  {...formik.getFieldProps('confirmPassword')}
                  className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {'is-invalid': formik.touched.confirmPassword && formik.errors.confirmPassword},
                    {
                      'is-valid': formik.touched.confirmPassword && !formik.errors.confirmPassword,
                    }
                  )}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.confirmPassword}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

              {/* begin::Form group */}
              <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
                <button
                  type='submit'
                  id='kt_password_reset_submit'
                  className='btn btn-lg defi-base-button fw-bolder me-4'
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
          {/* end::Content */}
        </div>
      </div>
    </>
  )
}
