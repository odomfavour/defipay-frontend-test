import {Button, Modal} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../shared/helpers'

const PersonalPageModal = (props: { show: boolean; handleClose:() => void }) => {
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
                <div className="p-5">
                  <h4 className="text-center">Ready-made dresses for the oldies</h4>
                  <div className="text-center">ADESHINA & CO.</div>
                  <div className="mt-5 mb-3">
                    <p className="text-center">Ready madeReady madeReady madeReady madeReady madeReady madeReady madeReady made</p>
                  </div>
                  <form action="">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-5">
                          <label htmlFor="exampleFormControlInput1" className="form-label">Send notification to</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="First Name"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-5">
                          <label htmlFor="exampleFormControlInput1" className="form-label">Send notification to</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="Last Name"/>
                        </div>
                      </div>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Send notification to</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="Email Address"/>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Send notification to</label>
                      <input type="tel" className="form-control" id="exampleFormControlInput1"
                            placeholder="Phone Number"/>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="mb-5">
                          <label htmlFor="exampleFormControlInput1" className="form-label">Send notification to</label>
                          <select className="custom-select form-control" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="mb-5">
                          <label htmlFor="exampleFormControlInput1" className="form-label">Send notification to</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1"
                                placeholder="Last Name"/>
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-main">Pay Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        </div>
    )
}

export default PersonalPageModal
