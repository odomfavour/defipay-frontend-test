import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import queryString from 'query-string'

export function VerifyEmail() {
  const email = localStorage.getItem('email')
  let useremail = email !== null ? email.toString() : ''
  const {id} = queryString.parse(window.location.search)
  console.log(id)
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])
  return (
    <>
      {id === '' ? (
        <Redirect to='/error' />
      ) : (
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
              <div className='d-flex justify-content-center'>
                <img src={toAbsoluteUrl('/media/images/defi-mail.svg')} alt='' />
              </div>
              <br />
              <h1 className='defi-text'>Verify Your Email</h1>
              <h4 className='defi-text'>
                Please click the link that was sent to your email ({useremail}) to verify your email
              </h4>
              <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
                <Link to='/auth/login'>
                  <button
                    type='button'
                    id='kt_confirm_mail_button'
                    className='btn btn-lg defi-base-button fw-bolder'
                    //   disabled={formik.isSubmitting || !formik.isValid}
                  >
                    Go to mail
                  </button>
                </Link>{' '}
              </div>
              <span className='d-flex justify-content-center defi-text'>
                Didn't get the email? <Link to='/auth/login'>Click Here to Resend</Link>
              </span>
            </div>
            {/* end::Wrapper */}
          </div>
          {/* end::Content */}
        </div>
      )}
    </>
  )
}

export default VerifyEmail
