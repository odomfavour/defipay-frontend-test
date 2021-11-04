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
                Defipay act as a gateway for merchants to pay with Crypto, for buying and selling of goods as services where Crypto act as the curreneny for exchange
              </p>
            </div>
            <div className='store-title'>
              <strong>Defipay is here for you</strong>
            </div>
            <div className='store-description'>
              <p className='lh-base'>
                Defipay is the future of Crypto, it's here to stay and forever.
                Imagine not having to walk Into a store or need to pay for any utility such as transportation, why carry cash when you can simply use Defipay to pay your utilities? Perfect isn't it? Get into it asap
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
