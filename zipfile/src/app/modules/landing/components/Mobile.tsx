/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Mobile.css'
import {toAbsoluteUrl} from '../../../../shared/helpers'
const Mobile = () => {
  return (
    <section className='collaborate-section bg-grey-color section-one-third-right-map mobile-bg'>
      <div className='container'>
        <div className='row justify-content-lg-between justify-content-center'>
          <div className='col-lg-6 col-md-7 col-7'>
            <div className='defipaymobile'>
              <div className='mobile-title'>Download Our Mobile Apps</div>
              <p className="lh-base">
                Feeling Stressed from the morning, why not star your day with a cup of freash cup of
                coffe with a profesionally unique taste and aroma from CoffeCiano
              </p>
              <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-3 col-6'>
                  <a href='#' className='app-item'>
                    <div className='icon'>
                      <img
                        src={toAbsoluteUrl('/media/images/icons/apps/googleplay.png')}
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                  </a>
                </div>

                <div className='col-lg-3 col-md-3 col-sm-3 col-6'>
                  <a href='#' className='app-item'>
                    <div className='icon'>
                      <img
                        src={toAbsoluteUrl('/media/images/icons/apps/appstore.png')}
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-5 col-md-5 col-5'>
            <div className='preview-image-v2 text-center'>
              <img
                src={toAbsoluteUrl('/media/images/icons/apps/screen.png')}
                alt=''
                className='animate-float-bob-y img-fluid bounce2'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mobile
