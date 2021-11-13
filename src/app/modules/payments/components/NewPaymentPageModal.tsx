import {Modal} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../shared/helpers'

const NewPaymentPageModal = (props: {
  show: boolean
  handleClose: () => void
  openOneTime: () => void
  openSub: () => void
}) => {
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
        <div className='modal-header'>
          <h5 className='modal-title' id='exampleModalLabel'>
            Subscribe
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='modal'
            aria-label='Close'
            onClick={props.handleClose}
          ></button>
        </div>
        <div className='modal-lg'>
          <div className='modal-content'>
            <div className='modal-body'>
              <h3 className='text-center'>New Payment Page</h3>
              <div className='px-5'>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <img
                      src={toAbsoluteUrl('../media/images/one-time-payment.svg')}
                      className='img-fluid me-5'
                      alt=''
                    />
                    <div>
                      <h3 className='mb-3'>One-time Payment</h3>
                      <p>Create a page for your customers to pay you</p>
                    </div>
                  </div>
                  <div>
                    <button className='btn-light btn' onClick={props.openOneTime}>
                      Select
                    </button>
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <img
                      src={toAbsoluteUrl('../media/images/subscription-payment.svg')}
                      className='img-fluid me-5'
                      alt=''
                    />
                    <div>
                      <h3>Subscription Payment</h3>
                      <p>Create a page for recurring payments and subscriptions </p>
                    </div>
                  </div>
                  <div>
                    <button className='btn-light btn' onClick={props.openSub}>
                      Select
                    </button>
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <img
                      src={toAbsoluteUrl('../media/images/product-payment.svg')}
                      className='img-fluid me-5'
                      alt=''
                    />
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
    </div>
  )
}

export default NewPaymentPageModal
