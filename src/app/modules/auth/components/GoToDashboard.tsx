import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import {Link} from 'react-router-dom'
import './AuthExtra.css'
export function GoToDashboard() {
  return (
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom 
      position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
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
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto auth-wrapper-adjuster'>
          <h2 className='text-center'>Adeshina & Co</h2>
          <h5 className='text-center gdb-format-d-text'>Welcome on board, to Defipay</h5>
          <div className='d-flex justify-content-center'>
            <img src={toAbsoluteUrl('/media/images/gotodashboard.jpg')} alt='' />
          </div>
          <p className='text-center' style={{marginTop: '4px'}}>
            Your business is in test mode, you can now start using Defipay. to activate to live
            payments, submit your compliance form
          </p>
          {/* begin::Action */}
          <div className='text-center'>
            <Link
              to='/dashboard'
              className='btn btn-lg w-100 mb-5'
              style={{backgroundColor: '#FFBF18', color: '#2D294E'}}
            >
              Go to Dashboard
            </Link>
          </div>
          {/* end::Action */}
        </div>
      </div>
    </div>
  )
}
