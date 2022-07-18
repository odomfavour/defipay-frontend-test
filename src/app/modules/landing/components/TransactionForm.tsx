import React, { useState, useEffect } from 'react'
import './TransactionForm.css'
import { toAbsoluteUrl } from '../../../../shared/helpers'
type Props = {
    main: number
}

const TransactionForm: React.FC<Props> = ({main}) => {
    console.log(main)
    const [popup, setPopUp] = useState(false)
    const [selectSend, setSelectSend] = useState(false)
    const [selectReceive, setSelectReceive] = useState(false)
    const [destination, setDestination] = useState(false)
    // const [history, setHistory] = useState(false)
    // const [wallet, setWallet] = useState(false)
    // const [settings, setSettings] = useState(false)
    const [exchange, setExchange] = useState(612.00);
    const [userFund, setUserFund] = useState(1);


    const openSend = () => {
        setPopUp(true);
        setSelectSend(true);
        setSelectReceive(false);
        setDestination(false)
    }
    const openReceive = () => {
        setPopUp(true);
        setSelectSend(false);
        setSelectReceive(true);
        setDestination(false)
    }
    const openDestination = () => {
        setPopUp(true);
        setSelectSend(false);
        setSelectReceive(false);
        setDestination(true)
    }

    // const openHistory = () => {
    //     setHistory(true);
    //     setSettings(false);
    //     setWallet(false)
    // }
    // const openSettings = () => {
    //     setSettings(true);
    //     setHistory(false);
    //     setWallet(false)
    // }
    // const openWallet = () => {
    //     setWallet(true);
    //     setHistory(false);
    //     setSettings(false)
    // }
    // const [topButtons, setTopButons] = useState(['$', 'Beneficiary', 'History', 'Wallet', 'Settings'])
    // const [activeTab, setActiveTab] = useState('$')
    // const openTab = (tab: string) => {
    //     console.log(tab)
    //     setActiveTab(tab)
    //     switch (tab) {
    //         case 'Wallet':
    //             openWallet();
    //             break;
    //         case 'History':
    //             openHistory();
    //             break;
    //         case 'Settings':
    //             openSettings();
    //             break
    //         default:
    //             break;
    //     }

    // }

    useEffect(() => {

        let btns = document.querySelectorAll('.tab-section');
        btns.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                console.log(e)
                let { classList } = e.target as HTMLButtonElement;
                let current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace('active', "");
                // this.className += " active";

                classList.add('active-tab')
            })
        })
        console.log(btns)
    }, [])




    const calculateEquivalent = () => {

        let changed = userFund * main;
        setExchange(changed);


    }

    return (
        <section>

            <section className="transaction-form">
                <div className="card">
                    <div className="card-body">
                        <div className="calc-input-section">
                            <div className="d-flex align-items-center">
                                <div className="input-side">
                                    <div className="mb-3">
                                        <label htmlFor="sendInput" className="form-label">You send</label>
                                        <input type="number" className="form-control" id="sendInput" placeholder="1" min="0" value={isNaN(userFund) ? '' : userFund} onKeyUp={calculateEquivalent} onChange={(e) => setUserFund(parseInt(e.target.value))} />
                                    </div>
                                </div>
                                <div className="selection-side d-flex justify-content-between align-items-center" role="button" onClick={openSend}>
                                    <div className="d-flex">
                                        <div className="country-flag me-1">
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-flagg'
                                                alt='...'
                                            />
                                        </div>
                                        <h4 className='mb-0'>USA</h4>
                                    </div>
                                    <div className="icon">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="calc-input-section">
                            <div className="d-flex align-items-center">
                                <div className="input-side">
                                    <div className="mb-3">
                                        <label htmlFor="sendInput" className="form-label">Recipient gets</label>
                                        <input type="number" className="form-control" id="sendInput" placeholder="1" min="1" value={isNaN(exchange) ? 0 : exchange} disabled />
                                    </div>
                                </div>
                                <div className="selection-side d-flex justify-content-between align-items-center" role="button" onClick={openReceive}>
                                    <div className="d-flex">
                                        <div className="country-flag me-1">
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-flagg'
                                                alt='...'
                                            />
                                        </div>
                                        <h4 className='mb-0'>USA</h4>
                                    </div>
                                    <div className="icon">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="calc-input-section">
                            <div className="d-flex align-items-center">
                                <div className="input-side">
                                    <div className="mb-3">
                                        <label htmlFor="sendInput" className="form-label">Payment Destination</label>
                                        <div className="d-flex align-items-center">
                                            <div className="country-flag me-2">
                                                <img
                                                    src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                    className='small-flag'
                                                    alt='...'
                                                />
                                            </div>
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="selection-side d-flex justify-content-end align-items-center" role="button" onClick={openDestination}>
                                    <div className="icon">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-container text-center">
                            <div className="button btn btn-warning me-5">Receive</div>
                            <div className="button btn btn-warning">Send</div>
                        </div>
                    </div>
                </div>
            </section>
            {popup ? <section className='pop-up-overlay'>
                <div className="popup-relative">
                    <div className="popup">
                        {
                            selectSend ? <div className='send-option'>
                                <h4 className='text-center text-primary'>Select currency to send</h4>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between align-items-center currency-slip" role='button'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-circle me-3'
                                                alt='...'
                                            />
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center currency-slip" role='button'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-circle me-3'
                                                alt='...'
                                            />
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center currency-slip" role='button'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-circle me-3'
                                                alt='...'
                                            />
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                            </div> : ""
                        }

                        {
                            selectReceive ? <div className='receive-option'>
                                <h4 className='text-center text-primary'>Select currency to be received</h4>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between align-items-center currency-slip" role='button'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-circle me-3'
                                                alt='...'
                                            />
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center currency-slip" role='button'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-circle me-3'
                                                alt='...'
                                            />
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center currency-slip" role='button'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-circle me-3'
                                                alt='...'
                                            />
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                            </div> : ""
                        }

                        {
                            destination ? <div className='destination-option'>
                                <h4 className='text-center text-primary'>Select Destination</h4>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between align-items-center currency-slip" role='button'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-circle me-3'
                                                alt='...'
                                            />
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center currency-slip" role='button'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-circle me-3'
                                                alt='...'
                                            />
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center currency-slip" role='button'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={toAbsoluteUrl('/media/images/countries/usa.jpg')}
                                                className='small-circle me-3'
                                                alt='...'
                                            />
                                            <h4 className='mb-0'>USA</h4>
                                        </div>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                            </div> : ""
                        }

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
                                </form>
                            </div>
                        </div>

                        <div className="wallet-topup">
                            <h4 className='text-center text-primary'>Wallet Top-up</h4>
                            <p className='px-4'>Topping up your wallet attracts a little fee. However, sending money using your wallet is completely free.</p>
                            <div className="d-grid gap-2 my-4">
                                <button className="btn btn-primary" type="button">Top-up now</button>
                                <button className="btn btn-sec-primary mt-3" type="button">Top-up later</button>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <button className="btn btn-danger" onClick={() => { setPopUp(false) }}>Cancel</button>
                        </div>
                    </div>
                </div>

            </section> : ""}


            {/* paymentlink */}
            {/* <section className='text-center'>
                <h3>Payment Links</h3>
                <p>Create a payment link to receive money from anywhere in the world.</p>
                <button className="btn btn-primary my-5" onClick={() => { setPopUp(true) }}>Create a payment link</button>
                <p>If you have previously created payment links,<br></br>
                    <a href="#stuff">click here to view them.</a></p>
            </section> */}
            {/* <div className="d-flex justify-content-end">
                <div className="top-tabs d-flex">
                    {
                        topButtons.map((tab, index) => (
                            <div className={activeTab === tab ? 'tab-section active' : 'tab-section'} role='button' key={index} onClick={() => { openTab(tab) }}>{tab}</div>
                        ))
                    }
                </div>
            </div> */}
            {/* <section className='signin-section mt-5'>
                <div className="back-btn" role='button'>
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="inner-section">
                    <div className="signin-form mb-3">
                        <h2>Let's get going</h2>
                        <p>signin for new and registered users.</p>
                        <div className="calc-input-section">
                            <input type="email" className="form-control" id="signinemail" placeholder="email@defipay" />
                        </div>
                        <p>By continuing, you agree to the Terms of service</p>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button">Get code</button>
                        </div>
                    </div>
                    <div className="enter-code mb-3">
                        <h2>Email Code</h2>
                        <p>Check email@defipay.com for a 6-digit code  from us</p>
                        <div className="calc-input-section">
                            <input type="number" className="form-control" id="codenum" placeholder="000 000" />
                        </div>
                        <p className="text-primary">Resend code</p>
                    </div>

                    {
                        settings ? <div className="settings-section">
                            <div className="text-center mb-4">
                                <h2 className='text-primary'>Settings</h2>
                            </div>
                            <div className="d-grid gap-2 mb-4">
                                <button className="btn btn-danger" type="button">Logout</button>
                            </div>
                            <div className="calc-input-section">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4>2-Factor Authentication</h4>
                                    <div>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        </div>
                                    </div>
                                </div>
                                <p>Use 2 Factor authentication to add an extra layer of security.</p>
                                <p className='text-danger'>Your account is not currently protected.</p>
                            </div>
                            <div className="calc-input-section">
                                <div className="d-flex align-items-center justify-content-between" role='button'>
                                    <h4>Developer Sections</h4>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <div className="calc-input-section">
                                <p>Get our API or Developer Link</p>
                                <p>Contact Us: <span className='text-primary'>support@payouts.cash</span></p>
                            </div>
                        </div> : ""
                    }
                    {
                        wallet ? <div className="wallet-section">
                            <h2 className='text-center'>My Wallet
                                <span>
                                    <img
                                        src={toAbsoluteUrl('/media/images/money-bag.svg')}
                                        className=''
                                        alt='...' />
                                </span>
                            </h2>
                            <div className="wallet-display bg-success text-white text-center">
                                <p>Wallet Balance</p>
                                <h5>USD</h5>
                                <h3>0.00</h3>

                            </div>
                            <div className="d-grid gap-2 my-4">
                                <button className="btn btn-primary" type="button">Top-up my-wallet</button>
                            </div>
                        </div> : ""
                    }

                    {
                        history ? <div className="history-section">
                            <div className="text-center mb-4">
                                <h2 className='text-primary'>History</h2>
                            </div>
                            <p>You haven’t made any transactions.</p>

                            <div className="receive-tab">
                                <p>When you receive money through payouts.cash, the transactions will appear here.</p>
                                <div className="d-grid gap-2 my-4">
                                    <button className="btn btn-primary" type="button">Receive</button>
                                </div>
                            </div>

                            <div className="send-tab">
                                <p>When you send money through payouts.cash, the transactions will appear here.</p>
                                <div className="d-grid gap-2 my-4">
                                    <button className="btn btn-primary" type="button">Send</button>
                                </div>
                            </div>


                        </div> : ""
                    }

                </div>
            </section> */}



        </section>
    )
}

export default TransactionForm