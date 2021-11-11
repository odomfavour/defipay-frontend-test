/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
// import * as auth from '../redux/AuthRedux'
import * as authactions from '../redux/AuthActions'
import {login} from '../redux/AuthCRUD'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: '',
  password: '',
}

export function Login() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        let username = values.email
        login(username, values.password)
          .then((res) => {
            setLoading(false)
            const {token} = res.data.data
            let accessToken = token
            dispatch(authactions.actions.login(accessToken))
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            if (e.response) {
              setStatus(e.response.data.message)
            } else if (e.request) {
              setStatus('The login detail is incorrect')
            } else {
              setStatus('The login detail is incorrect')
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
            className='form w-100'
            onSubmit={formik.handleSubmit}
            noValidate
            id='kt_login_signin_form'
          >
            {/* begin::Heading */}
            <div className='text-center mb-10'>
              <h1 className='text-dark mb-3'>Login</h1>
              {/* <div className='text-gray-400 fw-bold fs-4'>
          New Here?{' '}
          <Link to='/auth/registration' className='link-primary fw-bolder'>
            Create an Account
          </Link>
        </div> */}
            </div>
            {/* begin::Heading */}

            {formik.status ? (
              <div className='mb-lg-15 alert alert-danger'>
                <div className='alert-text font-weight-bold'>{formik.status}</div>
              </div>
            ) : (
              <div></div>
            )}

            {/* begin::Form group */}
            <div className='fv-row mb-10'>
              {/* <label className='form-label fs-6 fw-bolder text-dark'>Email</label> */}
              <input
                placeholder='Email Address'
                {...formik.getFieldProps('email')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.email && formik.errors.email},
                  {
                    'is-valid': formik.touched.email && !formik.errors.email,
                  }
                )}
                type='email'
                name='email'
                autoComplete='off'
              />
              {formik.touched.email && formik.errors.email && (
                <div className='fv-plugins-message-container'>
                  <span role='alert'>{formik.errors.email}</span>
                </div>
              )}
            </div>
            {/* end::Form group */}

            {/* begin::Form group */}
            <div className='fv-row mb-10'>
              <input
                type='password'
                placeholder='Password'
                autoComplete='off'
                {...formik.getFieldProps('password')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {
                    'is-invalid': formik.touched.password && formik.errors.password,
                  },
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
              <div className='d-flex justify-content-end mt-n5' style={{paddingTop: '15px'}}>
                <div className='d-flex flex-stack mb-2'>
                  {/* begin::Label */}
                  <label className='form-label fw-bolder text-dark fs-6 mb-0'>
                    Forgot Password
                  </label>
                  {/* end::Label */}
                  {/* begin::Link */}
                  <Link
                    to='/auth/forgot-password'
                    className='link-primary fs-6 fw-bolder'
                    style={{marginLeft: '5px'}}
                  >
                    Reset Password ?
                  </Link>
                  {/* end::Link */}
                </div>
              </div>
            </div>
            {/* end::Form group */}

            {/* begin::Action */}
            <div className='text-center'>
              <button
                type='submit'
                style={{backgroundColor: '#FFBF18', color: '#2D294E'}}
                id='kt_sign_in_submit'
                className='btn btn-lg w-100 mb-5'
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {!loading && <span className='indicator-label'>Continue</span>}
                {loading && (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div>
            {/* end::Action */}
          </form>
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
    </div>
  )
}
