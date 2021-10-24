import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
const Partners = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='left-heading'>
              <h2 className='section-title'>
                <strong>Our Partners</strong>{' '}
              </h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-2 col-md-2 col-sm-12 col-6 mb-4'>
            <div className='img'>
              <img src={toAbsoluteUrl('/media/images/icons/apps/partner1.png')} alt='' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 col-6 mb-4'>
            <div className='img'>
              <img src={toAbsoluteUrl('/media/images/icons/apps/partner2.png')} alt='' className='img-fluid'/>
            </div>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 col-6 mb-4'>
            <div className='img'>
              <img src={toAbsoluteUrl('/media/images/icons/apps/partner3.png')} alt='' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 col-6 mb-4'>
            <div className='img'>
              <img src={toAbsoluteUrl('/media/images/icons/apps/partner4.png')} alt='' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 col-6 mb-4'>
            <div className='img'>
              <img src={toAbsoluteUrl('/media/images/icons/apps/partner5.png')} alt='' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
