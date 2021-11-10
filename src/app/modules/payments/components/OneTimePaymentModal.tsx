import {Button, Modal} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../shared/helpers'

const OneTimePaymentModal = (props: { show: boolean; handleClose: () => void; openSuccess: () => void; }) => {
    return (
        <div>
           <Modal className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" size="lg" centered aria-hidden="true" show={props.show} onHide={props.handleClose} >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Subscribe</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.handleClose}></button>
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
                    <button className='btn btn-warning'onClick={props.openSuccess}>Create</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal> 
        </div>
    )
}

export default OneTimePaymentModal
