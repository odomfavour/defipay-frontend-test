import {Modal} from 'react-bootstrap-v5'

const NewSubPaymentPage = (props: { show: boolean; handleClose:() => void; openNewPage:() => void;}) => {
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
                        <div className="px-5">
                            <div className="mb-4">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name of your page"/>
                            </div>
                            <div className="mb-4">
                                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Page description"/>
                            </div>

                            <h3 className="font-weight-bold">SEO Image (Optional) </h3>
                            <p>Image will show when the page is shared on social media. We recommend a 1024 x 512 pixel JPG or PNG, under 1MB in size </p>

                            <div className="text-center">
                                <button className="btn btn-light">
                                + Choose File
                                </button>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                Collect phone numbers on this page
                                </label>
                            </div>
                            <div className="text">
                                <button className="btn btn-light">Show advanced option</button>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="basic-url" className="form-label">Use custom link </label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">https://defipay.com/pay/</span>
                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mt-3">
                                <h4>Do you want to collect any additional information?</h4>
                            </div>
                            <div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">https://defipay.com/pay/</span>
                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                    <button className="btn btn-light text-danger" type="button" id="button-addon2">X</button>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3>+  Add Another field</h3>
                            </div>
                            <div className="mt-3">
                                <button className="btn btn-light">Cancel</button>
                                <button className="btn btn-warning">
                                    <select className="form-select" aria-label="Default select example" style={{backgroundColor: '#ffc700'}}>
                                        <option selected>Create</option>
                                        <option value="1">Page Link</option>
                                        <option value="2">QR Code</option>
                                    </select>
                                </button>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="my-4">
                                <p>Page Name</p>
                                <h4>Redeemers Coll</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p>Status</p>
                                </div>
                                <div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Published</label>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p>Page Type</p>
                                </div>
                                <div>
                                    <p>Custom Plan</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p>Currency</p>
                                </div>
                                <div>
                                    <p>DFC</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p>Description</p>
                                </div>
                                <div>
                                    <p>Transport sub let</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p>Date Created</p>
                                </div>
                                <div>
                                    <p>Oct 6, 2021 7:30am</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-light">Duplicate</button>
                                <button className="btn btn-light">Edit Page</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Modal>  
        </div>
    )
}

export default NewSubPaymentPage
