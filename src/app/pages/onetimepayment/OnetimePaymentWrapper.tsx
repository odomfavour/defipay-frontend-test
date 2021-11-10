import React, {FC, useEffect, useState} from 'react'
import {shallowEqual, useSelector} from 'react-redux'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../shared/layout/core'
import {toAbsoluteUrl} from '../../../shared/helpers'
import './OnetimePayment.css'
import {Button, Modal} from 'react-bootstrap-v5'


const OnetimePaymentPage: FC = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <Modal className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" size="lg" centered aria-hidden="true" show={show} onHide={handleClose} >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Subscribe</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <h3 className='text-center'>New Payment Page</h3>
                <div className='px-5'>
                  <div className='d-flex justify-content-between align-items-center mb-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <img src={toAbsoluteUrl('../media/images/one-time-payment.svg')} className="img-fluid me-5" alt='' />
                      <div>
                        <h3 className='mb-3'>One-time Payment</h3>
                        <p>Create a page for your customers to pay you</p>
                      </div>
                    </div>
                    <div>
                      <button className='btn-light btn'>Select</button>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center mb-5'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <img src={toAbsoluteUrl('../media/images/subscription-payment.svg')} className="img-fluid me-5" alt='' />
                      <div>
                        <h3>Subscription Payment</h3>
                        <p>Create a page for recurring payments and subscriptions </p>
                      </div>
                    </div>
                    <div>
                      <button className='btn-light btn'>Select</button>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center mb-5'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <img src={toAbsoluteUrl('../media/images/product-payment.svg')} className="img-fluid me-5" alt='' />
                      <div>
                        <h3>Product Payment</h3>
                        <p>Create a page to sell products from your Inventory</p>
                      </div>
                    </div>
                    <div>
                      <button className='btn-light btn'>Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <Modal className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" size="lg" centered aria-hidden="true" show={show} onHide={handleClose} >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Subscribe</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <h3 className='text-center'>New Payment Page</h3>
                <form action=''>
                  <div className="mb-5">
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="Page Name"/>
                  </div>
                  <div className="mb-5">
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="Description"/>
                  </div>
                  <div className="mb-5">
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="Set a fixed payment on this page"/>
                  </div>
                  <div className='mb-5'>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                             value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Customer</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                             value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Merchant</label>
                    </div>
                  </div>
                  <div className='mb-5'>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Collect phone numbers on this page</label>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Redirect after payment</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="https://redirect.link instagram"/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Success message</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="Message to show after payment"/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Send notification to</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="Email address"/>
                  </div>
                  <div className='text-center my-5'>
                    <button className='btn btn-light'>Cancel</button>
                    <button className='btn btn-warning'>Create</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
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
