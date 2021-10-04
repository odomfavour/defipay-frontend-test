/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'

const StoreSection = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-12 col-12 align-self-center'>
            <img
              src={toAbsoluteUrl('/media/images/icons/apps/guy2.png')}
              className='img-fluid d-block mx-auto'
              alt=''
            />
          </div>
          <div className='col-lg-5 col-md-12 col-12'>
            <div className='defipaytitle2'>
              <strong>Create your online store</strong>
            </div>

            <div className='defipaytext2'>
              <p>
                Defipay payments are processed through a private network of computers linked through
                a shared ledger.Each transaction is simultaneouly recorded in a "Blockchain"
              </p>
            </div>
            <div className='defipaytitle2'>
              <strong>Defipay is here for you</strong>
            </div>
            <div className='defipaytext2'>
              <p>
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
