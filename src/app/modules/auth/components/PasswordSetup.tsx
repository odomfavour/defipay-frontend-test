/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
// import {useDispatch} from 'react-redux'
// import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'

const initialValues = {
  email: '',
}

const passwordSetupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})
export function PasswordSetup() {
  const [loading, setLoading] = useState(false)
  // const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: passwordSetupSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
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
              id='kt_login_password_reset_form'
              onSubmit={formik.handleSubmit}
            >
              <div className='text-center mb-10'>
                <h1 className='text-dark mb-3'>Setup Password</h1>
              </div>
              {/* begin::Form group */}
              <div className='fv-row mb-10'>
                <label className='form-label fw-bolder text-gray-900 fs-6'>Email</label>
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
                >
                  <span className='indicator-label'>Submit</span>
                  {loading && (
                    <span className='indicator-progress'>
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
