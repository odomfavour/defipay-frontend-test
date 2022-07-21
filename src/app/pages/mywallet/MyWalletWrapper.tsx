import React from 'react'
import { toAbsoluteUrl } from '../../../shared/helpers'

const MyWalletWrapper = () => {
    const [popup, setPopup] = React.useState(false);
    const [topup, setTopup] = React.useState(false);
    const [walletTopup, setWalletTopup] = React.useState(true);
    const openTopup = () => {
        setPopup(true);
        setWalletTopup(false);
        setTopup(true);
    }
    return (
        <section>
            <div className="main-wrapper d-flex justify-content-center align-items-center">
                <div className="center-card card">
                    <div className="card-body">
                        <div className="wallet-section">
                            <h2 className='text-center'>My Wallet
                                <span>
                                    <img
                                        src={toAbsoluteUrl('/media/images/money-bag.svg')}
                                        className=''
                                        alt='...' />
                                </span>
                            </h2>
                            <div className="wallet-display bg-warning text-white text-center">
                                <p>Wallet Balance</p>
                                <h5>USD</h5>
                                <h3>0.00</h3>

                            </div>
                            <div className="d-grid gap-2 my-4">
                                <button className="btn yellow-outline-btn" type="button" onClick={() => setPopup(true)}>Top-up my wallet</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section>
                {popup && <div className="pop-up-overlay">
                    <div className="popup-relative">
                        <div className="popup">
                            <section>
                                {
                                    walletTopup && <section>
                                    <div className="text-center">
                                        <h3>Wallet Top-up</h3>
                                        <p>Topping up your wallet attracts a little fee.<br></br> However, sending<br></br>
                                            money using your wallet is completely free.</p>
                                    </div>
                                    <div className="d-grid gap-2 my-4">
                                        <button className="btn btn-warning mb-5" type="button" onClick={openTopup}>Top-up now</button>
                                        <button className="btn yellow-outline-btn" type="button" onClick={() => setPopup(false)}>Top-up later</button>
                                    </div>
                                </section>
                                }
                            </section>
                            <section>
                                {topup &&
                                    <div className="topup-section">
                                        <h3 className='text-center text-primary'>Enter amount to Top-up</h3>
                                        <form action="">
                                            <div className="calc-input-section">
                                                <label htmlFor="amount" className="form-label">Enter Amount [USD]</label>
                                                <input type="number" className="form-control" id="amount" placeholder="0" />
                                            </div>
                                            <div className="d-grid gap-2 my-4">
                                                <button className="btn btn-warning mb-5" type="button" onClick={openTopup}>Top-up now</button>
                                            </div>
                                        </form>
                                    </div>}
                            </section>

                            <div className="text-center">
                                <button className="btn btn-danger my-4" onClick={() => setPopup(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </section>
        </section>
    )
}

export default MyWalletWrapper