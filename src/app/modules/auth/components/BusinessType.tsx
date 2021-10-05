import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import * as auth from '../redux/AuthRedux'
import {confirmemail} from '../redux/AuthCRUD'
const initialValues = {
  businesstype: '',
}

const businessTypeSchema = Yup.object().shape({
  businesstype: Yup.string()
    .required('Business Type is required')
    .oneOf(['advance', 'basic', 'standard']),
})
export function BusinessType() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: businessTypeSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        confirmemail(values.businesstype)
          .then(({data: {accessToken}}) => {
            setLoading(false)
            dispatch(auth.actions.login(accessToken))
          })
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('Registration process has broken')
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
          {/* begin::Wrapper */}
          <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
            <form
              className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
              noValidate
              id='kt_login_signup_form'
              onSubmit={formik.handleSubmit}
            >
              {/* begin::Heading */}
              <div className='mb-10 text-center'>
                {/* begin::Title */}
                <h1 className='text-dark mb-3'>Choose Business Type</h1>
                {/* end::Title */}
              </div>
              {/* end::Heading */}
              {formik.status && (
                <div className='mb-lg-15 alert alert-danger'>
                  <div className='alert-text font-weight-bold'>{formik.status}</div>
                </div>
              )}
              {/* begin::Form group businesstype */}
              <div className='form-check'>
                <input
                  type='radio'
                  defaultValue='basic'
                  {...formik.getFieldProps('businesstype')}
                  className={clsx(
                    'form-check-input  form-control-solid',
                    {'is-invalid': formik.touched.businesstype && formik.errors.businesstype},
                    {
                      'is-valid': formik.touched.businesstype && !formik.errors.businesstype,
                    }
                  )}
                />
                {'   '}
                <label className='form-check-label form-label fw-bolder text-dark fs-6'>
                  Basic
                </label>
              </div>

              <div className='form-check'>
                <input
                  type='radio'
                  defaultValue='standard'
                  {...formik.getFieldProps('businesstype')}
                  className={clsx(
                    'form-check-input form-control-solid',
                    {'is-invalid': formik.touched.businesstype && formik.errors.businesstype},
                    {
                      'is-valid': formik.touched.businesstype && !formik.errors.businesstype,
                    }
                  )}
                />
                <label className='form-check-label form-label fw-bolder text-dark fs-6'>
                  Standard
                </label>
                {formik.touched.businesstype && formik.errors.businesstype && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.businesstype}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className='form-check'>
                <input
                  type='radio'
                  defaultValue='advance'
                  {...formik.getFieldProps('businesstype')}
                  className={clsx(
                    'form-check-input form-control-solid',
                    {'is-invalid': formik.touched.businesstype && formik.errors.businesstype},
                    {
                      'is-valid': formik.touched.businesstype && !formik.errors.businesstype,
                    }
                  )}
                />
                <label className='form-check-label form-label fw-bolder text-dark fs-6'>
                  Advance
                </label>
                {formik.touched.businesstype && formik.errors.businesstype && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.businesstype}</span>
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
