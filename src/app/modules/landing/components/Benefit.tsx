/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
const Benefit = () => {
  return (
    <section className='section defipaybg'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-12 col-12 align-self-center'>
            <img
              src={toAbsoluteUrl('/media/images//icons/apps/Features.png')}
              className='img-fluid d-block mx-auto'
              alt=''
            />
          </div>

          <div className='col-lg-5 col-md-12 align-self-center'>
            <div className='defipaytitle'>Benefits of Using Defipay For Payments</div>
            <div className='defipaytext'>
              <p>
                Defipay payments are processed through a private network of computers linked through
                a shared ledger
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
                  <h5 className='title'>Fast Payment Platform</h5>
                  <p>
                    Defipay payment are processes through a private network pf computers linked
                    through a shared ledger
                  </p>
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
                  <h5 className='title'>Fast Payment Platform</h5>
                  <p>
                    Defipay payment are processes through a private network pf computers linked
                    through a shared ledger
                  </p>
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
                  <h5 className='title'>Fast Payment Platform</h5>
                  <p>
                    Defipay payment are processes through a private network pf computers linked
                    through a shared ledger
                  </p>
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
