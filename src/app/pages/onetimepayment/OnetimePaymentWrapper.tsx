import React, {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../shared/layout/core'
import {toAbsoluteUrl} from '../../../shared/helpers'
import './OnetimePayment.css'
import {Button, Modal} from 'react-bootstrap-v5'
import SuccessModal from '../../modules/payments/components/SuccessModal'
import NewPaymentPageModal from '../../modules/payments/components/NewPaymentPageModal'
import OneTimePaymentModal from '../../modules/payments/components/OneTimePaymentModal'
import PersonalPageModal from '../../modules/payments/components/PersonalPageModal'
import SubscriptionPaymentModal from '../../modules/payments/components/SubscriptionPaymentModal'
import NewSubPaymentPage from '../../modules/payments/components/NewSubPaymentPage'


const OnetimePaymentPage: FC = () => {
  const [show, setShow] = useState(false);
  const [oneTimeModal, setOneTimeModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPersonalModal, setShowPersonalModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [subscription, setSubscription] = useState(false);
  const [newPageOpen, setNewPageOpen] = useState(false)
  const handleSubOpen = () => setSubscription(true)
  const handleSubClose = () => setSubscription(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOneTimeClose = () => setOneTimeModal(false);
  const handleOneTimeShow = () => setOneTimeModal(true);
  const handleSuccessClose = () => setShowSuccess(false);
  const handleSuccessShow = () => setShowSuccess(true);
  const handlePersonalOpen = () => setShowPersonalModal(true);
  const handlePersonalClose = () => setShowPersonalModal(false);
  const handleNewPageOpen = () => setNewPageOpen(true)
  const handleNewPageClose = () => setNewPageOpen(false)
  return (
    <>
      <div className='content-wrapper'>
        <div className='card px-4'>
          <div className='d-flex justify-content-between my-5'>
            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center'>
                <img src={toAbsoluteUrl('../media/images/file.svg')} alt='' />
                <h3 className='ms-3 me-5 mb-0'>Filter</h3>
              </div>
              <input type='text' className='form-control' placeholder='Search' />
            </div>
            <div className='text-center'>
              <button className='btn main-btn'>+ New Page</button>
            </div>
          </div>
          <section className='min-card d-flex justify-content-center align-items-center'>
            <div>
              <div className='text-center'>
                <img src={toAbsoluteUrl('../media/images/Vector.png')} className="img-fluid" alt='' />
              </div>
              <span className='card-title d-flex justify-content-center title-extension'>
              Hello, Adeshina & co
            </span>
              <p className='card-text d-flex justify-content-center text-extension'>
                Simply create a page, share the link to your customers, and start accepting payments. The easiest pathway
                to accept payment.
              </p>
              <div className='text-center'>
                <button className='btn main-btn' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>+ New Page</button>
              </div>
            </div>
          </section>
          </div>
        <NewPaymentPageModal show={show} handleClose={handleClose} openOneTime={handleOneTimeShow} openSub={handleSubOpen} />
        <OneTimePaymentModal show={oneTimeModal} handleClose={handleOneTimeClose} openSuccess={handleSuccessShow}/>
        <SuccessModal show={showSuccess} handleClose={handleSuccessClose} openPersonal={handlePersonalOpen} />
        <PersonalPageModal show={showPersonalModal} handleClose={handlePersonalClose} />
        <SubscriptionPaymentModal show={subscription} handleClose={handleSubClose} openNewPage={handleNewPageOpen}/>
        <NewSubPaymentPage show={newPageOpen} handleClose={handleNewPageClose} openNewPage={handleNewPageOpen}/>
      </div>
    </>
  )
}
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
