import React, {useEffect, useState} from 'react'
import {confirmemail} from '../redux/AuthCRUD'
import queryString from 'query-string'
import {Link} from 'react-router-dom'

export function ConfirmEmail() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const {userid, appcode} = queryString.parse(window.location.search)
  if (appcode === '' || appcode === null) {
    setLoading(true)
    setStatus('Invalid Password Link')
  }

  if (userid === '' || userid === null) {
    setLoading(true)
    setStatus('Invalid Password Link')
  }

  setTimeout(() => {
    // setLoading(true)
    confirmemail(userid as string, appcode as string)
      .then((res) => {
        if (res.data.success) {
          localStorage.removeItem('businessname')
          localStorage.removeItem('email')
          localStorage.removeItem('countrycode')
          setLoading(true)
        }
      })
      .catch(() => {
        setLoading(false)
        // setSubmitting(false)
        setStatus('Email Confirmation process has broken')
      })
  }, 1000)
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
            {/* begin::Heading */}
            <div className='mb-10 text-center'>
              {/* begin::Title */}
              {loading && <h1 className='text-dark mb-3'>Confirmed Email</h1>}
              {!loading && <h1 className='text-dark mb-3'>Email Confirmation Not Completed</h1>}
              {/* end::Title */}
            </div>
            {/* end::Heading */}
            {status && (
              <div className='mb-lg-15 alert alert-danger'>
                <div className='alert-text font-weight-bold'>{status}</div>
              </div>
            )}
            {/* begin::Form group Email */}
            <div className='fv-row mb-7'>
              {/* <label className='form-label fw-bolder text-dark fs-6'>Email</label> */}
            </div>
            {/* end::Form group */}
            {/* begin::Form group */}
            <div className='text-center'>
              <button
                type='submit'
                id='kt_sign_up_submit'
                className='btn btn-lg defi-base-button w-100 mb-5'
              >
                <Link
                  to='/auth/login'
                  style={{color: 'black'}}
                  className='link-default fs-6 fw-bolder'
                >
                  Continue to login
                </Link>
              </button>
            </div>
            {/* end::Form group */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Content */}
      </div>
    </>
  )
}

export default ConfirmEmail
