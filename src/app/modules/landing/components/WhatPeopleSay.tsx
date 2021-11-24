import React from 'react'
import './WhatPeopleSay.css'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import { Carousel } from 'react-bootstrap-v5'
const WhatPeopleSay = () => {
  return (
    <section className='section testimong-bg'>
      <div className='container'>
        {/* <div id='carouselExampleControls' className='carousel slide' data-ride='carousel'>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={toAbsoluteUrl('/media/images/circleface.png')} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={toAbsoluteUrl('/media/images/circleface.png')} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={toAbsoluteUrl('/media/images/defipay-transfer.svg')} className="d-block w-100" alt="..."/>
          </div>
        </div>
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
                 I was skeptical initially but the user interface and the ease of usage really beat all my objections. Thanks for Defipay
                </p>
                <p></p>
                <div className='eli'>
                  <strong>Sophia Titus</strong>
                </div>
                <span>SOSO store</span>
              </div>
            </div>
            <div className='col-2'></div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div> */}
          <Carousel fade>
            <Carousel.Item>
              <div className='row align-items-center'>
                <div className='col-1'></div>
                <div className='col-3'>
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
                    I was skeptical initially but the user interface and the ease of usage really beat all my objections. Thanks for Defipay
                    </p>
                    <p></p>
                    <div className='eli'>
                      <strong>Sophia Titus</strong>
                    </div>
                    <span>SOSO store</span>
                  </div>
                </div>
                <div className='col-2'></div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='row align-items-center'>
                <div className='col-1'></div>
                <div className='col-3'>
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
                    I was skeptical initially but the user interface and the ease of usage really beat all my objections. Thanks for Defipay
                    </p>
                    <p></p>
                    <div className='eli'>
                      <strong>Sophia Titus</strong>
                    </div>
                    <span>SOSO store</span>
                  </div>
                </div>
                <div className='col-2'></div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='row align-items-center'>
                <div className='col-1'></div>
                <div className='col-3'>
                  <div className='carousel-item active'>
                    <div className='carousel-inner'>
                      <img
                        src={toAbsoluteUrl('/media/images/girl-testimony.png')}
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
                    I was skeptical initially but the user interface and the ease of usage really beat all my objections. Thanks for Defipay
                    </p>
                    <p></p>
                    <div className='eli'>
                      <strong>Sophia Titus</strong>
                    </div>
                    <span>SOSO store</span>
                  </div>
                </div>
                <div className='col-2'></div>
              </div>
            </Carousel.Item>
          </Carousel>
          
        </div>
    </section>
  )
}

export default WhatPeopleSay
