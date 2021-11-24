import {Modal} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import './checkoutpage.css'

const CheckoutModal = (props: {show: boolean; handleClose: () => void}) => {
  return (
    <div>
      <Modal
        className='modal fade'
        id='exampleModal'
        aria-labelledby='exampleModalLabel'
        size='lg'
        centered
        aria-hidden='true'
        show={props.show}
        onHide={props.handleClose}
      >
        <div className='modal-lg'>
          <div className='modal-content'>
            <div className='modal-body no-padding'>
              <div className='d-flex'>
                <div className='coin-section'>
                  <div className='top'>
                    <h3>PAY WITH</h3>
                  </div>
                  <div className='card-box'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='exampleRadios1'
                        value='option1'
                        checked
                      />
                      <label className='form-check-label' htmlFor='exampleRadios1'>
                        QR
                      </label>
                    </div>
                  </div>
                  <div className='card-box'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='exampleRadios1'
                        value='option1'
                        checked
                      />
                      <label className='form-check-label' htmlFor='exampleRadios1'>
                        BANK
                      </label>
                    </div>
                  </div>
                  <div className='card-box'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='exampleRadios1'
                        value='option1'
                        checked
                      />
                      <label className='form-check-label' htmlFor='exampleRadios1'>
                        USSD
                      </label>
                    </div>
                  </div>
                  <div className='card-box'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='exampleRadios1'
                        value='option1'
                        checked
                      />
                      <label className='form-check-label' htmlFor='exampleRadios1'>
                        Transfer
                      </label>
                    </div>
                  </div>
                  <div className='card-box'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='exampleRadios'
                        id='exampleRadios1'
                        value='option1'
                        checked
                      />
                      <label className='form-check-label' htmlFor='exampleRadios1'>
                        Crypto
                      </label>
                    </div>
                  </div>
                </div>
                <div className='input-section'>
                  <div className='top-section d-flex my-5 px-5'>
                    <h4 className='mb-0'>Secured by DefiPay</h4>
                    <div className='company-image text-center ms-5'>
                      <img src={toAbsoluteUrl('/media/images/circle.svg')} alt='' />
                    </div>
                  </div>
                  <div className='lower-section mt-5'>
                    <div className='p-5'>
                      <div className='mb-5 form-content'>
                        <input
                          type='text'
                          className='form-control'
                          id='exampleFormControlInput1'
                          placeholder='Enter your Crypto address'
                        />
                      </div>
                      <div className='text-center mb-5 mt-5 pt-5'>
                        <button className='btn main-btn-lg'>Pay Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CheckoutModal
