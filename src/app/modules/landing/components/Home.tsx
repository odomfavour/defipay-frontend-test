/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Home.css'
import {toAbsoluteUrl} from '../../../../shared/helpers'
export function Home() {
  return (
    <section className='welcome-area' data-bg={toAbsoluteUrl('/media/images/photos/welcome.png')}>
      <div className='welcome-bg'>
        {/* <img src={toAbsoluteUrl('/media/images/bg.svg')} alt='' /> */}
      </div>
      <div className='welcome-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12 align-self-centerX'>
              <h1>
                <strong>
                  Make seamless transactions with{' '}
                  <span className='Defipayyellow'>cryptocurrency</span>
                </strong>
              </h1>
              <p>
                Defipay Payments are processed through a private network of computers linked through
                a shared ledger.Each transaction is simultaneously recorded in a "blockchain"
              </p>
              <a className='btn-yellow-line' href='#'>
                Get Started
              </a>
            </div>
            <div className='offset-lg-1 col-lg-5 col-md-6 col-12 align-self-center'>
              <div className='apps'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-10'>
                      <a href='#' className='app-item'>
                        <div className='icon'>
                          <img
                            src={toAbsoluteUrl('/media/images/icons/apps/defipay_lady.png')}
                            className='img-fluid img-first'
                            alt=''
                          />
                        </div>
                      </a>
                    </div>

                    <div className='col-lg-2 col-md-2 col-sm-2 col-2 img-second'></div>

                    <div
                      className='col-lg-6 col-md-6 col-sm-6 col-6 img-third'
                      style={{marginTop: '-50px', marginLeft: '-20px'}}
                    >
                      <a href='#' className='app-item'>
                        <div className='icon'>
                          <img
                            src={toAbsoluteUrl('/media/images/icons/apps/defipay_lady2.png')}
                            className='img-fluid'
                            alt=''
                          />
                        </div>
                      </a>
                    </div>

                    <div
                      className='col-lg-4 col-md-4 col-sm-4 col-4'
                      style={{marginTop: '-50px', marginLeft: '-20px'}}
                    >
                      <a href='#' className='app-item'>
                        <div className='icon'>
                          <img
                            src={toAbsoluteUrl('/media/images/icons/apps/defipay_guy.png')}
                            className='img-fluid img-four'
                            alt=''
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
