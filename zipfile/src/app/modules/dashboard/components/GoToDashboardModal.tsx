import React from 'react'
import {Button, Modal} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../shared/helpers'
type Props = {
  show: boolean
  businessName?: string
  handleClose: () => void
}
const GoToDashboardModal: React.FC<Props> = ({show, handleClose, businessName}) => {
  return (
    <div>
      <Modal
        id='go_to_dashboard'
        tabIndex={-1}
        aria-hidden='true'
        dialogClassName='modal-dialog-centered mw-1000px h-auto'
        show={show}
        onHide={handleClose}
      >
        <div className='container-xxl px-10 py-10'>
          <div className='modal-header py-2 d-flex justify-content-end border-0'>
            {/* begin::Close */}
            {/* <div className='btn btn-icon btn-sm btn-light-primary' onClick={handleClose}>
              <KTSVG className='svg-icon-2' path='/media/icons/duotune/arrows/arr061.svg' />
            </div> */}
            {/* end::Close */}
          </div>

          <div className='modal-body'>
            <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto auth-wrapper-adjuster'>
              <h2 className='text-center'>{businessName}</h2>
              <h5 className='text-center gdb-format-d-text'>Welcome on board, to Defipay</h5>
              <div className='d-flex justify-content-center'>
                <img src={toAbsoluteUrl('/media/images/gotodashboard.jpg')} alt='' />
              </div>
              <p className='text-center' style={{marginTop: '4px'}}>
                Your business is in test mode, you can now start using Defipay. to activate to live
                payments, submit your compliance form
              </p>
              {/* begin::Action */}
              <div className='text-center'>
                <Button
                  onClick={handleClose}
                  className='btn btn-lg w-100 mb-5'
                  style={{backgroundColor: '#FFBF18', color: '#2D294E'}}
                >
                  Go to Dashboard
                </Button>
              </div>
              {/* end::Action */}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
export {GoToDashboardModal}
