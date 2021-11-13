import {Button, Modal} from 'react-bootstrap-v5'

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
                        </div>
                    </div>
                    </div>
                </div>
            </Modal>  
        </div>
    )
}

export default NewSubPaymentPage
