import {Button, Modal} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../shared/helpers'

const SubscriptionPaymentModal = (props: { show: boolean; handleClose:() => void; openNewPage:() => void;}) => {
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
                        <div className="px-5 text-center">
                            <div className="text-center">
                                <img src={toAbsoluteUrl('../media/images/subscription-payment.svg')} className="img-fluid me-5" alt='' />
                            </div>
                            <h4>Subcription Payment</h4>
                            <p> On what subscription do you want your customers to be?</p>
                            <div className="text-center">
                                <div className='mb-4'>
                                     <button className="btn btn-light">Add to my existing plans</button>
                                </div>
                                <div className='mb-4'>
                                    <button className="btn btn-light" onClick={props.openNewPage}>create a new plan </button>  
                                </div>
                                <div className='mb-4'>
                                <button className="btn btn-light">Allow my customers to create the plan</button>
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

export default SubscriptionPaymentModal
