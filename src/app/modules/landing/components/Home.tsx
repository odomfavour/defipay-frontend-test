/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, } from 'react'
import React from 'react'
import {Button, Modal} from 'react-bootstrap-v5'
import './Home.css'
import {toAbsoluteUrl} from '../../../../shared/helpers'
export function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <button className='btn-yellow-line' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>
                Get Started
              </button>
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
            {/* Modal */}
            <Modal className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" size="lg" centered aria-hidden="true" show={show} onHide={handleClose} >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Subscribe</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
              </div>
              <div className="modal-lg">
                <div className="modal-content">
                <div className="modal-body">
                  <div className="my-4">
                    <div className="text-center">
                        <img
                        src={toAbsoluteUrl('/media/images/defipay-logo.jpg')}
                        className='img-fluid'
                        alt=''
                        style={{height: '100px', textAlign: 'center'}}
                      />
                    </div>
                  </div>
                 <form  action="https://app.getresponse.com/add_subscriber.html" accept-charset="utf-8" method="post">
                    <div className="mb-3">
                      <div className="row">
                        <div className="col-md-6">
                            <label className="form-label"> First Name</label>
                            <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label"> Last Name</label>
                            <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp"/>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="col-md-6">
                             <label className="form-label">Country</label>
                              <select className="form-select" aria-label="Default select example">
                                <option selected>Select your country</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Industry</label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Select your Industry</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea className="form-control" name="" id="" rows={5}></textarea>
                    </div>
                    <div>
                      <input type="hidden" name="campaign_token" value="zsM3y" />
                      {/* Thank you page (optional) */}
                      <input type="hidden" name="thankyou_url" value="http://www.defipaylanding.tech/thankyou/"/>
                      {/* Add subscriber to the follow-up sequence with a specified day (optional) */}
                      <input type="hidden" name="start_day" value="0" />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  )
}
