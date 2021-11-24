import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import './Experience.css'
const Experience = () => {
  return (
    <section className='section experience-bg p-t-80 p-b-80 p-t-md-160'>
      <div className='container pe-0'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-lg-6 col-md-7 col-12'>
            <div className='d-flex justify-content-center align-items-center px-2'>
              <div>
                <div className='experience-title mb-3 '>
                  <strong>This is your experience on Defipay</strong>
                </div>
                <div className='experience-description'>
                  <p className='lh-base'>
                    Most of us have experienced scams trading through p2p.
                    Now with Defipay you don't need to swap your tokens for fiat through p2p you can easily make purchases with Defipay
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-5 col-12 text-center'>
            <img src={toAbsoluteUrl('/media/images/experience.svg')} className='img-fluid'  alt='' />
            {/*<div className='preview-galley-v3 m-b-md-100'>*/}
            {/*  <div className='you-box animate-float-bob-y'>*/}
            {/*    <span className='box-label box-label-left'>You</span>*/}
            {/*    <img*/}
            {/*      className='box-image'*/}
            {/*      src={toAbsoluteUrl('/media/images/defiexperiencebag.png')}*/}
            {/*      alt=''*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className='defi-layer-wrapper'>*/}
            {/*    <div className='defi-layer-1'></div>*/}
            {/*    <div className='defi-layer-2'></div>*/}
            {/*  </div>*/}
            {/*  <div className='customer-box animate-float-bob-y'>*/}
            {/*    <span className='box-label box-label-right'>Your Customer</span>*/}
            {/*    <img*/}
            {/*      className='box-image'*/}
            {/*      src={toAbsoluteUrl('/media/images/defiexperiencebag.png')}*/}
            {/*      alt=''*/}
            {/*    />*/}
            {/*  </div>*/}

            {/*  /!* <img*/}
            {/*    className='preview-image-3 animate-float-bob-y'*/}
            {/*    src={toAbsoluteUrl('/media/images/youDefipay.svg')}*/}
            {/*    alt=''*/}
            {/*  /> *!/*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
