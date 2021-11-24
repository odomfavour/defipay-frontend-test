/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import './Benefit.css'
const Benefit = () => {
  return (
    <section className='section benefit-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-md-12 col-12 align-self-center'>
            <img
              src={toAbsoluteUrl('/media/images/defipay-transfer.svg')}
              className='img-fluid d-block mx-auto'
              alt=''
            />
          </div>

          <div className='col-lg-5 col-md-12 align-self-center'>
            <div className='benefit-title position'>WHY YOU SHOULD USE DEFIPAY</div>
            <div className='benefit-description'>
              <p>
                DEFIPAY provides users with several amazing features which crypto payment option offers over traditional payment methods.
              </p>
            </div>
            <ul className='features'>
              <li data-scroll-reveal='enter bottom move 30px over 0.6s after 0.2s'>
                <div className='count'>
                  <img
                    src={toAbsoluteUrl('/media/images/icons/apps/dot.png')}
                    className='img-fluid d-block mx-auto'
                    alt=''
                  />
                </div>
                <div className='text'>
                  <h5 className='title'>High level customer privacy</h5>
                </div>
              </li>
              <li data-scroll-reveal='enter bottom move 30px over 0.6s after 0.3s'>
                <div className='count'>
                  <img
                    src={toAbsoluteUrl('/media//images/icons/apps/dot.png')}
                    className='img-fluid d-block mx-auto'
                    alt=''
                  />
                </div>
                <div className='text'>
                  <h5 className='title'>Micro transactions</h5>
                </div>
              </li>
              <li data-scroll-reveal='enter bottom move 30px over 0.6s after 0.4s'>
                <div className='count'>
                  <img
                    src={toAbsoluteUrl('/media/images/icons/apps/dot.png')}
                    className='img-fluid d-block mx-auto'
                    alt=''
                  />
                </div>
                <div className='text'>
                  <h5 className='title'>More prospective customers</h5>
                </div>
              </li>
               <li data-scroll-reveal='enter bottom move 30px over 0.6s after 0.4s'>
                <div className='count'>
                  <img
                    src={toAbsoluteUrl('/media/images/icons/apps/dot.png')}
                    className='img-fluid d-block mx-auto'
                    alt=''
                  />
                </div>
                <div className='text'>
                  <h5 className='title'>More affordable fees</h5>
                </div>
              </li>
               <li data-scroll-reveal='enter bottom move 30px over 0.6s after 0.4s'>
                <div className='count'>
                  <img
                    src={toAbsoluteUrl('/media/images/icons/apps/dot.png')}
                    className='img-fluid d-block mx-auto'
                    alt=''
                  />
                </div>
                <div className='text'>
                  <h5 className='title'>Freedom from volatile currency fluctuation and heavy bank charges.</h5>
                </div>
              </li>
               <li data-scroll-reveal='enter bottom move 30px over 0.6s after 0.4s'>
                <div className='count'>
                  <img
                    src={toAbsoluteUrl('/media/images/icons/apps/dot.png')}
                    className='img-fluid d-block mx-auto'
                    alt=''
                  />
                </div>
                <div className='text'>
                  <h5 className='title'>Payments in lower denominators like Satoshi’s for Bitcoin.</h5>
                </div>
              </li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-12 align-self-center'></div>
        </div>
      </div>
    </section>
  )
}

export default Benefit
