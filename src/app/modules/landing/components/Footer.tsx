/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export function Footer() {
  return (
    <>
      {/* <div className='mailing-wrapper'>
        <div className='row mb-3'>
          <label className='col-md-8 col-form-label'>Join Our Mailing List</label>
          <div className='col-md-4'>
            <div className='input-group mb-3'>
              <input
                className='form-control form-control-sm'
                placeholder='Enter Your Email Address'
              />
              <button className='mail-subscribe'>Subscribe</button>
            </div>
          </div>
        </div>
      </div> */}
      <footer>
        <div id='defipaycurve'>
          <div className='defipaycenter'>Defipay</div>
        </div>
        <div className='container defipayfooter'>
          <div className='row'>
            <div className='col-lg-5 col-md-12 col-sm-12'>
              <div className='text defipaytextfooter'>
                Defipay payment are processed through a private network of computers linked of
                through a shared ledgde.Business Opportunity .
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
              <h5>SERVICE</h5>
              <ul className='footer-nav'>
                <li>
                  <a href='#'>
                    <span>Payments</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>Trading</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>Trading</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>Rates</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
              <h5>COMPANY</h5>
              <ul className='footer-nav'>
                <li>
                  <a href='#'>
                    <span>Payments</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>About us</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>Contact </span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>Testimonials</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>FAQs</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-12'>
              <h5>CONNECT</h5>
              <div className='address'>
                <p>
                  Obafemi Awolowo Cresent
                  <br />
                  Ikoyi,Lagos Nigeria
                </p>
                <p>Phone: (234) 80-211-7370</p>
                <p>
                  <span>E-Mail:</span>
                  <a href='#'>info@deficonnect.tech</a>
                </p>
                <ul className='social'>
                  <li>
                    <a href='#'>
                      <i className='fa fa-facebook-square'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-twitter-square'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <p className='copyright'>© 2021 Defipay. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
