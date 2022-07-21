import React from 'react'
import { Link } from 'react-router-dom'
import './send.css'
// import { toAbsoluteUrl } from '../../../shared/helpers'
import bitcoin from '../../../images/bitcoin.png'
import defi from '../../../images/defi.png'
import wallet from '../../../images/wallet.png'
import barcode from '../../../images/barcode.png'

const SendWrapper = () => {
    const [popup, setPopup] = React.useState(false);
    const [checkout, setCheckout] = React.useState(false);
    const [finalCheckout, setFinalCheckout] = React.useState(false);
    const [firstCheckout, setFirstCheckout] = React.useState(true);
    const [network, setNetwork] = React.useState(false);
    const chooseNetwork = () => {
        setPopup(true);
        setNetwork(true)
    }

    const showReceipt = () => {
        setPopup(false);
        setNetwork(false); setFirstCheckout(false)
        setFinalCheckout(true);
    }
    return (
        <section>
            <div className="main-wrapper d-flex justify-content-center align-items-center">
                {
                    !checkout &&
                    <div className="center-card card">
                        <div className="card-body">
                            <section>
                                <h3 className='text-center'>Who are you sending to?</h3>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="search" placeholder="Search by recipient name" />
                                </div>
                                <div className="d-grid gap-2 my-5">
                                    <button className="btn yellow-outline-btn" type="button" onClick={() => setPopup(true)}>+ Send to a new recipient
                                    </button>
                                </div>
                                <div className="available-persons">
                                    <div className="available-card d-flex justify-content-between align-items-center mb-3 flex-md-row flex-column">
                                        <section className='d-flex align-items-center'>
                                            <div className="avatar me-3"></div>
                                            <div className="person-info">
                                                <h5 className='mb-0'>John Doe</h5>
                                                <p className='mb-0'>First Bank Of Nigeria</p>
                                            </div>
                                        </section>
                                        <button className="btn btn-warning" onClick={() => setCheckout(true)}>Send</button>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <Link to="/payment-link" className="btn btn-warning">Back</Link>
                                </div>
                            </section>
                        </div>

                    </div>
                }
                {
                    checkout && <div className="checkout-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="first-part d-flex justify-content-between align-items-center flex-md-row flex-column">
                                    <div className='d-flex align-items-center mb-4'>
                                        <h4 className='mb-0 me-3'>Sending:</h4>
                                        <div className="amount-box d-flex align-items-center">
                                            <h3 className='mb-0 me-2'>$0.00</h3>
                                            <div className="unit">
                                                <h3 className='mb-0'>USD</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center mb-4'>
                                        <h4 className='mb-0 me-3'>To:</h4>
                                        <div className="person-name">
                                            <h5 className='mb-0'>John Doe</h5>
                                        </div>
                                    </div>
                                </div>
                                {
                                    firstCheckout && <div className="my-5 py-5">
                                    <div className="d-flex flex-md-row flex-column px-5 mb-5">
                                        <h2 className='me-5'>Send With:</h2>
                                        <div className="crypto-cards">
                                            <div className="crypto-card mb-3 d-flex align-items-center" role="button" onClick={chooseNetwork}>
                                                <div className="image-section">
                                                    <img src={defi} className="img-fluid" alt='...' />
                                                </div>
                                                <div className="info-section">
                                                    <h5 className='mb-0'>USDT</h5>
                                                    <h5 className='mb-0'>Receives ~ 612.00 NGN</h5>
                                                </div>
                                            </div>
                                            <div className="crypto-card mb-3 d-flex align-items-center" role="button">
                                                <div className="image-section">
                                                    <img src={bitcoin} className="img-fluid" alt='...' />
                                                </div>
                                                <div className="info-section">
                                                    <h5 className='mb-0'>Bitcoin</h5>
                                                    <h5 className='mb-0'>Receives ~ 612.00 NGN</h5>
                                                </div>
                                            </div>
                                            <div className="crypto-card mb-3 d-flex align-items-center" role="button">
                                                <div className="image-section">
                                                    <img src={wallet} className="img-fluid" alt='...' />
                                                </div>
                                                <div className="info-section">
                                                    <h5 className='mb-0'>My Wallet</h5>
                                                    <h5 className='mb-0'>Receives ~ 612.00 NGN</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="btn yellow-outline-btn" onClick={() => setCheckout(false)}>Cancel Transaction</div>
                                    </div>
                                </div>
                                }
                                
                                {
                                    finalCheckout && <section>
                                    <div className="text-center">
                                        <p>Send 0.0000485 BTC to the<br></br>
                                            wallet address below once.<br></br>
                                            JAMES will automatically receive funds after confirmation.
                                        </p>
                                        <p className="text-warning">This is a one-time BTC</p>
                                        <img src={barcode} className="img-fluid" alt="" />
                                        <div className="mt-5 copy">
                                            <div className="crypto-card d-flex align-items-center">
                                                <div className="code-section">
                                                    <p className='mb-0'>17uoEtuihi6Lsg4hdedT7PUhF4FNgBPD2F</p>
                                                </div>
                                                <div className="copy-section text-center">
                                                    <i className="bi bi-back" role="button"></i>
                                                </div>
                                            </div>
                                            <p className="my-4">JAMES will receive 612.00 NGN</p>
                                            <div className="d-grid gap-2 my-4">
                                                <button className="btn yellow-outline-btn" type="button">Top-up my wallet</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                }
                            </div>
                        </div>
                    </div>
                }

                <section>
                    {popup && <div className="pop-up-overlay">
                        <div className="popup-relative">
                            <div className="popup">
                                <section>
                                    <div className="text-center">
                                        <h3>Send to new recipient</h3>
                                        <p>How will you receive the funds?</p>
                                    </div>
                                    <div className="border-boxes">
                                        <div className='box-border'>
                                            <h3 className='mb-0'>Nigeria</h3>
                                        </div>
                                        <div className='box-border'>
                                            <h3 className='mb-0'>Bank Account</h3>
                                        </div>
                                        <div className='box-border'>
                                            <h3 className='mb-0'>Nigeria</h3>
                                        </div>
                                    </div>
                                </section>
                                {
                                    network && <section>
                                        <div className="text-center">
                                            <h3>Kindly select a Network</h3>
                                        </div>

                                        <div className="border-boxes">
                                            <div className='thin-box-border' role="button" onClick={showReceipt}>
                                                <div className="d-flex align-items-center">
                                                    <div className="image-box me-3">
                                                        <img src={defi} className="img-fluid" alt='...' />
                                                    </div>
                                                    <h4 className='mb-0'>Binance Smart chain[BEP-20]</h4>
                                                </div>
                                            </div>
                                            <div className='thin-box-border'>
                                                <div className="d-flex align-items-center">
                                                    <div className="image-box me-3">
                                                        <img src={defi} className="img-fluid" alt='...' />
                                                    </div>
                                                    <h4 className='mb-0'>Tron Network [TRC-20]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                }
                                <div className="text-center">
                                    <button className="btn btn-danger my-4" onClick={() => setPopup(false)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </section>
            </div>
        </section>

    )
}

export default SendWrapper