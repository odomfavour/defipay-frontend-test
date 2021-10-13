import React from 'react'
import './WhatPeopleSay.css'
import {toAbsoluteUrl} from '../../../../shared/helpers'
const WhatPeopleSay = () => {
  return (
    <section className='section testimong-bg'>
      <div className='container'>
        <div id='carouselExampleControls' className='carousel slide' data-ride='carousel'>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-5'>
              <div className='carousel-item active'>
                <div className='carousel-inner'>
                  <img
                    src={toAbsoluteUrl('/media/images/circleface.png')}
                    className='d-none d-md-block clip-circle'
                    alt='...'
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 align-self-left'>
              <div className='testimony-title'>
                <strong>What People Say About Defipay</strong>
              </div>
              <div className='defipaytext2'>
                <p>
                  Defipay payments are processed through a private network of computers linked
                  through a shared ledger.Each transaction is simultaneouly recorded in a
                  "Blockchain".Defipay payment are processes through a private network pf computers
                  linked through a shared ledger
                </p>
                <p></p>
                <div className='eli'>
                  <strong>Elizabeth Lopez</strong>
                </div>
                <span>GMD Lopez Groups</span>
              </div>
            </div>
            <div className='col-2'></div>
            <a
              className='carousel-control-prev'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'
            >
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'
            >
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatPeopleSay
