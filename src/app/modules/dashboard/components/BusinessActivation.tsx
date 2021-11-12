/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import './activatebusiness.css'
type Props = {
  accountMode?: boolean
  businessName?: string
}
const BusinessActivation: FC<Props> = ({accountMode, businessName}) => (
  <>
    <div className='content-wrapper'>
      <div className='card'>
        <span className='card-title d-flex justify-content-center title-extension'>
          Hello, {businessName}
        </span>
        <h5 className='d-flex justify-content-center sub-title-extension'>
          Welcome on board, to Defipay
        </h5>
        <p className='card-text d-flex justify-content-center text-extension'>
          Your business is currently in test mode, there is a few step to go to start recieving
          payment from your customer online. to do this, see the guide below
        </p>
        <div className='card-body'>
          <div className='row defi-card-link-wrapper'>
            <div className='col-md-4'>
              <Link to='/compliance'>
                <div className='defi-card-link'>
                  <img className='card-img-top defi-link-image' alt='' src='images/img1' />
                  <h1 className='d-flex justify-content-center defi-compliance-link-title'>
                    Activate business
                  </h1>
                  <p className='d-flex justify-content-center defi-compliance-link-description'>
                    Submit compliance details to start receiving payments
                  </p>
                </div>
              </Link>
            </div>
            <div className='col-md-4'>
              <div className='defi-card-link'>
                <img className='card-img-top defi-link-image' alt='' src='images/img1' />
                <h1 className='d-flex justify-content-center defi-compliance-link-title'>
                  Take a tour
                </h1>
                <p className='d-flex justify-content-center defi-compliance-link-description'>
                  Want to know more about your dashboard?
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='defi-card-link'>
                <img className='card-img-top defi-link-image' alt='' src='images/img1' />
                <h1 className='d-flex justify-content-center defi-compliance-link-title'>
                  Go to support
                </h1>
                <p className='d-flex justify-content-center defi-compliance-link-description'>
                  Need help to answer questions?
                </p>
              </div>
            </div>
          </div>
          <h5 className='d-flex justify-content-center api-document'>
            API Documentation Go to docs
          </h5>
        </div>
        {/* <a href='#' class='card-link'>
          Card link
        </a> */}
      </div>
    </div>
  </>
)

export {BusinessActivation}
