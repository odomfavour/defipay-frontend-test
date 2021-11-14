import React from 'react'
import {toAbsoluteUrl} from '../../../shared/helpers'
import './WalletPage.css'

const WalletPageWrapper = () => {
  return <>
    <div className="card min-card">
      <div className="card-body">
        <div className="px-5">
          <div className="top-section"></div>
          <div className="text-center">
            <p>Equity Value</p>
            <h1 className="thin-font">DFC <span className="font-weight-bold thick-font">0.00</span> = $0.000000</h1>
            <div className="mt-5">
              <button className="btn btn-light main-button mb-5">Deposit</button>
              <button className="btn btn-light  main-button mx-5 mb-5">Withdraw</button>
              <button className="btn btn-light  main-button mb-5">Transfer</button>
            </div>
          </div>

          <div className="table-section mt-5">
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="coin-info d-flex align-items-center">
                <div className="coin-image">
                  <img src={toAbsoluteUrl('/media/images/circle.svg')} alt='' />           
                </div>
                <div className="coin-name ms-4">
                  <h4 className="mb-0">Deficonnect</h4>
                  <h4 className="mb-0">DFC</h4>
                </div>
              </div>
              <div className="coin-price">
                <h4 className="mb-0">10,000DFC</h4>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="coin-info d-flex align-items-center">
                <div className="coin-image">
                  <img src={toAbsoluteUrl('/media/images/circle.svg')} alt='' />           
                </div>
                <div className="coin-name ms-4">
                  <h4 className="mb-0">Bitcoin</h4>
                  <h4 className="mb-0">BTC</h4>
                </div>
              </div>
              <div className="coin-price">
                <h4 className="mb-0">1 BTC</h4>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="coin-info d-flex align-items-center">
                <div className="coin-image">
                  <img src={toAbsoluteUrl('/media/images/circle.svg')} alt='' />           
                </div>
                <div className="coin-name ms-4">
                  <h4 className="mb-0">Ethereum</h4>
                  <h4 className="mb-0">ETH</h4>
                </div>
              </div>
              <div className="coin-price">
                <h4 className="mb-0">3 ETH</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
}
export default WalletPageWrapper
