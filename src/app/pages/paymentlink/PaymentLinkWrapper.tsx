import React from 'react'

const PaymentLinkWrapper = () => {
    const [popup, setPopup] = React.useState(false)
    return (
        <div className="main-wrapper d-flex justify-content-center align-items-center">
            <div className="center-card card">
                <div className="card-body">
                    <section>
                        <h3 className='text-center'>Payment Links</h3>
                        <div className="sample-mail mb-3">
                            <h5 className='mb-0'>pay.defipay.tech/your_link</h5>
                        </div>
                        <p>Create a payment link to receive money from anywhere in the world.</p>
                        <div className="d-grid gap-2 my-5">
                            <button className="btn btn-warning" type="button" onClick={() => setPopup(true)}>Create a payment link</button>
                        </div>
                        <p>If you have previously created payment links,<br></br>
                            <a href="#stuff">click here to view them.</a></p>
                    </section>
                </div>

            </div>
            <section>
                {popup && <div className="pop-up-overlay">
                    <div className="popup-relative">
                        <div className="popup">
                            <section>
                                <div className='paymentlink-option'>
                                    <h4 className='text-center text-primary'>Create a payment link</h4>
                                    <div className="mt-4">
                                        <form action="">
                                            <div className="calc-input-section">
                                                <label htmlFor="linkEmail" className="form-label">Email address</label>
                                                <input type="email" className="form-control" id="linkEmail" placeholder="Email address [required]" />

                                            </div>
                                            <div className="calc-input-section">
                                                <div className="mb-3">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h4 className='mb-0'>Set a fixed amount?</h4>
                                                <div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2 my-4">
                                                <button className="btn btn-primary" type="button">Continue</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <div className="text-center">
                                <button className="btn btn-danger my-4" onClick={() => setPopup(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </section>
        </div>
    )
}

export default PaymentLinkWrapper