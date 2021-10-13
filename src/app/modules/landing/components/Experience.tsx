import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import './Experience.css'
const Experience = () => {
  return (
    <section className='section experience-bg p-t-80 p-b-80 p-t-md-160'>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-lg-6 col-md-10'>
            <div className='row experience-text-wrapper p-xl-5'>
              <div className='experience-title'>
                <strong>This is your experience on Defipay</strong>
              </div>
              <div className='experience-description'>
                <p>
                  Defipay payments are processed through a private network of computers linked
                  through a shared ledger.Each transaction is simultaneouly recorded in a
                  "Blockchain"
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-9'>
            <div className='preview-galley-v3 m-b-md-100'>
              <div className='you-box animate-float-bob-y'>
                <span className='box-label box-label-left'>You</span>
                <img
                  className='box-image'
                  src={toAbsoluteUrl('/media/images/defiexperiencebag.png')}
                  alt=''
                />
              </div>
              <div className='defi-layer-wrapper'>
                <div className='defi-layer-1'></div>
                <div className='defi-layer-2'></div>
              </div>
              <div className='customer-box animate-float-bob-y'>
                <span className='box-label box-label-right'>Your Customer</span>
                <img
                  className='box-image'
                  src={toAbsoluteUrl('/media/images/defiexperiencebag.png')}
                  alt=''
                />
              </div>

              {/* <img
                className='preview-image-3 animate-float-bob-y'
                src={toAbsoluteUrl('/media/images/youDefipay.svg')}
                alt=''
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
