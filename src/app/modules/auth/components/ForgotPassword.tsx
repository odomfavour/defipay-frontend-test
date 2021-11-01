import React, {useState, useEffect} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../redux/AuthCRUD'
import './AuthExtra.css'
const initialValues = {
  email: '',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        requestPassword(values.email)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
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
          {/* <a href='#' className='mb-12'>
          <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-1.svg')} className='h-45px' />
        </a> */}
          {/* end::Logo */}
          {/* begin::Wrapper */}
          <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
            <form
              className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
              noValidate
              id='kt_login_password_reset_form'
              onSubmit={formik.handleSubmit}
            >
              <div className='text-center mb-10'>
                {/* begin::Title */}
                <h1 className='text-dark mb-3 defi-form-h1'>Reset Password</h1>
                {/* end::Title */}

                {/* begin::Link */}
                <div
                  className='fw-bold fs-14'
                  style={{
                    justifyContent: 'left',
                    textAlign: 'left',
                    marginLeft: '-23px',
                    marginTop: '21px',
                  }}
                >
                  Enter the email associated with your account and we’ll send an email with
                  instructions to reset your password
                </div>
                {/* end::Link */}
              </div>

              {/* begin::Title */}
              {hasErrors === true && (
                <div className='mb-lg-15 alert alert-danger'>
                  <div className='alert-text font-weight-bold'>
                    Sorry, looks like there are some errors detected, please try again.
                  </div>
                </div>
              )}

              {hasErrors === false && (
                <div className='mb-10 bg-light-info p-8 rounded'>
                  <div className='text-info'>Sent password reset. Please check your email</div>
                </div>
              )}
              {/* end::Title */}

              {/* begin::Form group */}
              <div
                className='fv-row mb-10'
                style={{
                  justifyContent: 'left',
                  textAlign: 'left',
                  marginLeft: '-23px',
                  marginTop: '21px',
                }}
              >
                <label className='form-label fw-bolder text-gray-900 fs-6'>Email Address</label>
                <input
                  type='email'
                  placeholder=''
                  autoComplete='off'
                  {...formik.getFieldProps('email')}
                  className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {'is-invalid': formik.touched.email && formik.errors.email},
                    {
                      'is-valid': formik.touched.email && !formik.errors.email,
                    }
                  )}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.email}</span>
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
                  style={{width: !loading ? '362px' : ''}}
                  disabled={formik.isSubmitting || !formik.isValid}
                >
                  {!loading && <span className='indicator-label'>Send</span>}
                  {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
                {!loading && (
                  <span>
                    Remember your password?{' '}
                    <Link to='/auth/login' style={{color: 'black', fontWeight: 'bold'}}>
                      Login
                    </Link>{' '}
                  </span>
                )}
              </div>
              {/* end::Form group */}
            </form>
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Content */}
      </div>
    </>
  )
}
