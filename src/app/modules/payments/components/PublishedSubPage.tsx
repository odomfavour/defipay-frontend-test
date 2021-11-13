import {Button, Modal} from 'react-bootstrap-v5'

const PublishedSubPage = (props: { show: boolean; handleClose:() => void; openNewPage:() => void;}) => {
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
                            <div className="my-4">
                                <p>Page Name</p>
                                <h4>Redeemers Coll</h4>
                            </div>
                            <div>
                                <div className="input-group mb-3">
                                <button className="btn btn-light text-danger" type="button" id="button-addon2">Copy link</button>
                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                    <button className="btn btn-light text-danger" type="button" id="button-addon2">Visit page</button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
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
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <div>
                                    <p>Page Type</p>
                                </div>
                                <div>
                                    <p>Custom Plan</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <div>
                                    <p>Currency</p>
                                </div>
                                <div>
                                    <p>DFC</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <div>
                                    <p>Description</p>
                                </div>
                                <div>
                                    <p>Transport sub let</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3">
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

export default PublishedSubPage
