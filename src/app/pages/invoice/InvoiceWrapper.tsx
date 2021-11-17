import React, {FC, useState, useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../shared/layout/core'
import {toAbsoluteUrl} from '../../../shared/helpers'
import * as payment from '../../modules/payments/index'
import './invoice.css'
import OneTimePaymentModal from '../../modules/payments/components/OneTimePaymentModal'
import PersonalPageModal from '../../modules/payments/components/PersonalPageModal'
import {UserModel} from '../../modules/auth/models/UserModel'
import {RootState} from '../../../setup'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {InvoiceViewModel} from '../../modules/invoice'
import InvoiceGridView from '../../modules/invoice/components/InvoiceGridView'
import InvoiceDefault from '../../modules/invoice/components/InvoiceDefault'
import InvoiceAnalysis from '../../modules/invoice/components/InvoiceAnalysis'
import InvoiceCreationModal from '../../modules/invoice/components/InvoiceCreationModal'

const InvoicePage: FC = () => {
  const dispatch = useDispatch()
  const user: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  const invoices: InvoiceViewModel[] = useSelector<RootState>(
    ({invoice}) => invoice.invoices,
    shallowEqual
  ) as InvoiceViewModel[]
  console.log('endp', invoices)
  useEffect(() => {
    dispatch(payment.actions.getonetimepaymentpages())
  }, [dispatch])
  const [show, setShow] = useState(false)
  const [oneTimeModal, setOneTimeModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showPersonalModal, setShowPersonalModal] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleOneTimeClose = () => setOneTimeModal(false)
  const handleSuccessShow = () => setShowSuccess(true)
  const handlePersonalClose = () => setShowPersonalModal(false)
  return (
    <>
      <div className='row'>
        <div className='col-md-9'>
            <div className='card px-4'>
              <div className="top-part">
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
                      + Request a Payment
                    </button>
                  </div>
                </div>
              </div>             
              {invoices && invoices.length > 0 ? (
                <InvoiceGridView invoices={invoices} />
              ) : (
                <InvoiceDefault handleShow={handleShow} businessname={user.businessname} />
              )}
            </div>
            <InvoiceCreationModal
              show={show}
              handleClose={handleClose}
              openSuccess={handleSuccessShow}
            />
            <OneTimePaymentModal
              show={oneTimeModal}
              handleClose={handleOneTimeClose}
              openSuccess={handleSuccessShow}
            />
            <PersonalPageModal show={showPersonalModal} handleClose={handlePersonalClose} />
        </div>
        <div className='col-md-3'>
          <InvoiceAnalysis />
        </div>
      </div>
    </>
  )
}
const InvoiceWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.INVOICE'})}</PageTitle>
      <InvoicePage />
    </>
  )
}

export {InvoiceWrapper}
