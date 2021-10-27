/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import './StoreSection.css'
const StoreSection = () => {
  return (
    <section className='section store-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-5 col-12 align-self-center text-center'>
            <img
              src={toAbsoluteUrl('/media/images/icons/apps/guy2.png')}
              className='img-fluid d-block mx-auto'
              alt=''
            />
          </div>
          <div className='col-lg-6 col-md-7 col-12 store-text-wrapper'>
            <div className='store-title'>
              <strong>Create your online store</strong>
            </div>

            <div className='store-description'>
              <p className='lh-base'>
                Defipay payments are processed through a private network of computers linked through
                a shared ledger.Each transaction is simultaneouly recorded in a "Blockchain"
              </p>
            </div>
            <div className='store-title'>
              <strong>Defipay is here for you</strong>
            </div>
            <div className='store-description'>
              <p className='lh-base'>
                Defipay payments are processed through a private network of computers linked through
                a shared ledger.Each transaction is simultaneouly recorded in a "Blockchain"
              </p>
            </div>
          </div>
          <div className='col-lg-2 col-md-12 col-12'></div>
        </div>
      </div>
    </section>
  )
}

export default StoreSection
