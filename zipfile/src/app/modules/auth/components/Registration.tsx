/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, FC} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import * as merchant from '../../merchant/index'
import {validate} from '../redux/AuthCRUD'
import {Redirect} from 'react-router'
import {CountryModel} from '../../merchant/models/country/CountryModel'
import {RootState} from '../../../../setup'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'

const initialValues = {
  businessname: '',
  email: '',
  country: '',
}

const registrationSchema = Yup.object().shape({
  businessname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Business name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  country: Yup.string()
    .min(2, 'Minimum 2 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Country is required'),
})
const Registration: FC = () => {
  const [loading, setLoading] = useState(false)
  const [passwordpage, setPasswordPage] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(merchant.actions.getcountry())
  }, [dispatch])
  const country: CountryModel[] = useSelector<RootState>(
    ({merchant}) => merchant.country,
    shallowEqual
  ) as CountryModel[]
  console.log(country)
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        validate(values.email, values.businessname, values.country)
          .then((res) => {
            console.log(res.data)
            if (res.data.success) {
              setLoading(false)
              switch (res.data.message) {
                case 'Available for Use':
                  localStorage.setItem('businessname', values.businessname)
                  localStorage.setItem('email', values.email)
                  localStorage.setItem('countrycode', values.country)
                  setPasswordPage(true)
                  break
                default:
                  break
              }
              return
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
      {passwordpage && <Redirect to='/auth/setup-password' />}
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
          <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto auth-box'>
            <form
              className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
              noValidate
              id='kt_login_signup_form'
              onSubmit={formik.handleSubmit}
            >
              {/* begin::Heading */}
              <div className='mb-10 text-center'>
                {/* begin::Title */}
                <h1 className='text-dark mb-3'>Create Account</h1>
                {/* end::Title */}
              </div>
              {/* end::Heading */}
              {formik.status && (
                <div className='mb-lg-15 alert alert-danger'>
                  <div className='alert-text font-weight-bold'>{formik.status}</div>
                </div>
              )}
              {/* begin::Form group Business Name */}
              <div className='fv-row mb-7'>
                {/* <label className='form-label fw-bolder text-dark fs-6'>Business Name</label> */}
                <input
                  placeholder='Business Name'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('businessname')}
                  className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {'is-invalid': formik.touched.businessname && formik.errors.businessname},
                    {
                      'is-valid': formik.touched.businessname && !formik.errors.businessname,
                    }
                  )}
                />
                {formik.touched.businessname && formik.errors.businessname && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.businessname}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

              {/* begin::Form group Email */}
              <div className='fv-row mb-7'>
                {/* <label className='form-label fw-bolder text-dark fs-6'>Email</label> */}
                <input
                  placeholder='Email'
                  type='email'
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

              {/* begin::Form group Country */}
              <div className='fv-row mb-7'>
                {/* <label className='form-label fw-bolder text-dark fs-6'>Country</label> */}
                <select
                  placeholder='Country'
                  autoComplete='off'
                  {...formik.getFieldProps('country')}
                  className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {'is-invalid': formik.touched.country && formik.errors.country},
                    {
                      'is-valid': formik.touched.country && !formik.errors.country,
                    }
                  )}
                >
                  <option value='' disabled>
                    Select Country
                  </option>
                  {country &&
                    country.map((x) => <option value={x.countrycode.toString()}>{x.name}</option>)}
                </select>
                {formik.touched.country && formik.errors.country && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.country}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
              {/* begin::Form group */}
              <div className='text-center'>
                <button
                  type='submit'
                  id='kt_sign_up_submit'
                  className='btn btn-lg defi-base-button w-100 mb-5'
                  disabled={formik.isSubmitting || !formik.isValid}
                >
                  {!loading && <span className='indicator-label'>Continue</span>}
                  {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
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

export default Registration
