import React from 'react'
import { toAbsoluteUrl } from '../../../shared/helpers'

const MyWalletWrapper = () => {
    return (
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
                            <button className="btn btn-primary" type="button">Top-up my wallet</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyWalletWrapper