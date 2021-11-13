import {Modal} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../shared/helpers'

const SuccessModal = (props: {
  show: boolean
  link: string
  handleClose: () => void
  // openPersonal: () => void
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
              <div className='p-5'>
                <div className='text-center'>
                  <img src={toAbsoluteUrl('../media/images/checkmark-circle.png')} alt='' />
                </div>
                <p className='text-center'>
                  Your page is successfully created. Share your page link to start receiving payment
                </p>
                <div className='mb-5'>
                  <input
                    type='text'
                    value={props.link}
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='https//defipay.com/pay/'
                  />
                </div>
                <div className='d-flex justify-content-between'>
                  <button className='btn btn-light'>Copy link </button>
                  <button
                    className='btn btn-warning'
                    // onClick={props.openPersonal}
                  >
                    Visit your page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SuccessModal
