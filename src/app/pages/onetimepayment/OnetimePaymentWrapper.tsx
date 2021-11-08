import React, {FC, useEffect, useState} from 'react'
import {shallowEqual, useSelector} from 'react-redux'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../shared/layout/core'
import {toAbsoluteUrl} from '../../../shared/helpers'


const OnetimePaymentPage: FC = () => (
  <>
    <div className='content-wrapper'>
      <div className='card h-100'>
        <div className='text-center'>
          <img src={toAbsoluteUrl('../media/images/Vector.svg')}  className="img-fluid" alt='' />
        </div>
        <span className='card-title d-flex justify-content-center title-extension'>
          Hello, Adeshina & co
        </span>
        <p className='card-text d-flex justify-content-center text-extension'>
          Simply create a page, share the link to your customers, and start accepting payments. The easiest pathway to accept payment.
        </p>
        {/* <a href='#' class='card-link'>
          Card link
        </a> */}
      </div>
    </div>
  </>
)

const OnetimePaymentWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.PAYMENT'})}</PageTitle>
      <OnetimePaymentPage />
    </>
  )
}

export {OnetimePaymentWrapper}
