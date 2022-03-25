import React, {FC, useState, useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../shared/layout/core'
import {toAbsoluteUrl} from '../../../shared/helpers'
import * as payment from '../../modules/payments/index'
import './OnetimePayment.css'
import NewPaymentPageModal from '../../modules/payments/components/NewPaymentPageModal'
import OneTimePaymentModal from '../../modules/payments/components/OneTimePaymentModal'
import PersonalPageModal from '../../modules/payments/components/PersonalPageModal'
import SubscriptionPaymentModal from '../../modules/payments/components/SubscriptionPaymentModal'
import NewSubPaymentPage from '../../modules/payments/components/NewSubPaymentPage'
import PublishedSubPage from '../../modules/payments/components/PublishedSubPage'

import {UserModel} from '../../modules/auth/models/UserModel'
import {RootState} from '../../../setup'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {OneTimePaymentViewModel} from '../../modules/payments'
import OneTimePaymentGridView from '../../modules/payments/components/OneTimePaymentGridView'
import SuccessModal from '../../modules/payments/components/SuccessModal'

const OnetimePaymentPage: FC = () => {
  const dispatch = useDispatch()
  const user: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  const paymentpages: OneTimePaymentViewModel[] = useSelector<RootState>(
    ({payment}) => payment.otpayments,
    shallowEqual
  ) as OneTimePaymentViewModel[]
  const [refereshkey, setRefereshKey] = useState(0)
  useEffect(() => {
    dispatch(payment.actions.getonetimepaymentpages())
  }, [dispatch, refereshkey])
  const [show, setShow] = useState(false)
  const [oneTimeModal, setOneTimeModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showPersonalModal, setShowPersonalModal] = useState(false)
  const [subscription, setSubscription] = useState(false)
  const [newPageOpen, setNewPageOpen] = useState(false)
  const handleSubOpen = () => setSubscription(true)
  const handleSubClose = () => setSubscription(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleOneTimeClose = () => setOneTimeModal(false)
  const handleOneTimeShow = () => setOneTimeModal(true)
  const handleSuccessShow = () => setShowSuccess(true)
  const handlePersonalClose = () => setShowPersonalModal(false)
  const handleNewPageOpen = () => setNewPageOpen(true)
  const handleNewPageClose = () => setNewPageOpen(false)
  const handleReferesh = () => setRefereshKey((o) => o + 1)
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
              <button className='btn main-btn' onClick={handleShow}>
                + New Page
              </button>
            </div>
          </div>
          {paymentpages && paymentpages.length > 0 ? (
            <OneTimePaymentGridView paymentpages={paymentpages} />
          ) : (
            <section className='min-card d-flex justify-content-center align-items-center'>
              <div>
                <div className='text-center'>
                  <img
                    src={toAbsoluteUrl('../media/images/Vector.png')}
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <span className='card-title d-flex justify-content-center title-extension'>
                  Hello, {user.businessname}
                </span>
                <p className='card-text d-flex justify-content-center text-extension'>
                  Simply create a page, share the link to your customers, and start accepting
                  payments. The easiest pathway to accept payment.
                </p>
                <div className='text-center'>
                  <button
                    className='btn main-btn'
                    type='button'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                    onClick={handleShow}
                  >
                    + New Page
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
        <NewPaymentPageModal
          show={show}
          handleClose={handleClose}
          openOneTime={handleOneTimeShow}
          openSub={handleSubOpen}
        />
        <OneTimePaymentModal
          show={oneTimeModal}
          handleClose={handleOneTimeClose}
          openSuccess={handleSuccessShow}
          handleReferesh={handleReferesh}
        />
        {/* <SuccessModal show={showSuccess} handleClose={handleSuccessClose} openPersonal={handlePersonalOpen} /> */}
        <PersonalPageModal show={showPersonalModal} handleClose={handlePersonalClose} />
        <SubscriptionPaymentModal
          show={subscription}
          handleClose={handleSubClose}
          openNewPage={handleNewPageOpen}
        />
        <NewSubPaymentPage
          show={newPageOpen}
          handleClose={handleNewPageClose}
          openNewPage={handleNewPageOpen}
        />
        <PublishedSubPage
          show={newPageOpen}
          handleClose={handleNewPageClose}
          openNewPage={handleNewPageOpen}
        />
        {showSuccess && <SuccessModal show={showSuccess} handleClose={handleClose} link={''}/> }
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
