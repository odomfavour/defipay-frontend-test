import React from 'react'
import {Link} from 'react-router-dom'
export function Home(){
    return (
     <div>
   <div className='d-flex flex-stack mb-2'>
            {/* begin::Link */}
            <Link
              to='/auth/login'
              className='link-primary fs-6 fw-bolder'
              style={{marginLeft: '5px'}}
            >
              Login 
            </Link>
            {/* end::Link */}
          </div>
          <div className='d-flex flex-stack mb-2'>
            {/* begin::Link */}
            <Link
              to='/auth/registration'
              className='link-primary fs-6 fw-bolder'
              style={{marginLeft: '5px'}}
            >
              Sign Up 
            </Link>
            {/* end::Link */}
          </div>
      <p>Test Home Page</p>
    </div>
    )
}
