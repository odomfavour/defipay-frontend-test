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
                Defipay acts as a gateway that allows merchants to pay with crypto for buying and selling where crypto acts as the currency for exchange.
              </p>
            </div>
            <div className='store-description'>
              <p>
               Defipay is the future of crypto and it is here to stay. With Defipay, not having to walk into a store to buy or sell is feasible and their is absolutely no need to carry cash around when you have to pay for any utility such as transportation, electricity etc. Perfect isn't it? Get into it asap.
              </p>
            </div>
            <div>
              <h5> <em>...Defipay is here for you!</em></h5>
            </div>
          </div>
          <div className='col-lg-2 col-md-12 col-12'></div>
        </div>
      </div>
    </section>
  )
}

export default StoreSection
