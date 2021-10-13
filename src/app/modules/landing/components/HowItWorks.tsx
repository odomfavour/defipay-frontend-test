import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <section className='section defipaybg2 about-defipay'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-12 col-12 align-self-center'>
            <div className='howitworks-title'>
              <strong>How it Works</strong>
            </div>
            <div className='howitworks-description'>
              <p>
                Defipay payments are processed through a private network of computers linked through
                a shared ledger.Each transaction is simultaneouly recorded in a "Blockchain"
              </p>
            </div>
          </div>
          <div className='col-lg-7 col-md-12 col-12 align-self-center'></div>
        </div>
        <div className='outer-container'>
          <div className='row'>
            <div className='col'>
              <div className='services-block-nine col'>
                <div
                  className='inner-box wow fadeInUp'
                  data-wow-delay='0ms'
                  data-wow-duration='1500ms'
                >
                  <div className='icon-outer'>
                    <div className='icon-box'>
                      <img src={toAbsoluteUrl('/media/images/createaccount.svg')} alt='' />
                      {/* <h1 className='howitworks-dashes'></h1> */}
                      {/* <span className='icon flaticon-business-and-finance-1'></span> */}
                    </div>
                  </div>
                </div>
              </div>
              <h5 className='howitworks-title-2'>
                <strong>Create Account</strong>
              </h5>
              <div className='howitworks-description-2'>
                <p>
                  Defipay payments are processed through a private network of computers linked
                  through a shared ledger.Each transaction is simultaneouly recorded in a
                  "Blockchain"
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='services-block-nine col'>
                <div
                  className='inner-box wow fadeInUp'
                  data-wow-delay='0ms'
                  data-wow-duration='1500ms'
                >
                  <div className='icon-outer'>
                    <div className='icon-box'>
                      <img src={toAbsoluteUrl('/media/images/createstore.svg')} alt='' />

                      {/* <span className='icon flaticon-banknote'></span> */}
                    </div>
                  </div>
                </div>
              </div>

              <h5 className='howitworks-title-2'>
                <strong>Create a Store</strong>
              </h5>
              <div className='howitworks-description-2'>
                <p>
                  Defipay payments are processed through a private network of computers linked
                  through a shared ledger.Each transaction is simultaneouly recorded in a
                  "Blockchain"
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='services-block-nine col'>
                <div
                  className='inner-box wow fadeInUp'
                  data-wow-delay='0ms'
                  data-wow-duration='1500ms'
                >
                  <div className='icon-outer'>
                    <div className='icon-box'>
                      <img src={toAbsoluteUrl('/media/images/recievepayment.svg')} alt='' />
                      {/* <span className='icon flaticon-bank-building'></span> */}
                    </div>
                  </div>
                </div>
              </div>
              <h5 className='howitworks-title-2'>
                <strong>Receive Payment</strong>
              </h5>
              <div className='howitworks-description-2'>
                <p>
                  Defipay payments are processed through a private network of computers linked
                  through a shared ledger.Each transaction is simultaneouly recorded in a
                  "Blockchain"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
