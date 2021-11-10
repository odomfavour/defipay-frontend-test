import React, {useState,useEffect } from 'react'
import {Button, Modal} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../shared/helpers'
type Props = {
  show: boolean
  handleClose: () => void
}
  // const [showAlert, setShowAlert] = useState(false);

const OneTimePaymentModal: React.FC<Props> = ({show, handleClose}) =>  {
  const [showAlert, setShowAlert] = useState(false);
  const handleSuccessClose = () => {setShowAlert(false)};
  const handleSuccessShow = () => setShowAlert(true);
  return (
    <Modal className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" size="sm" centered aria-hidden="true" show={showAlert} onHide={handleSuccessClose} >
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Subscription</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
      </div>
      <div className="modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <p>Your subscription was successful. Check your mail for more information</p>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default OneTimePaymentModal
