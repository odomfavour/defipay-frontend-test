import React from 'react'
import './invoice-analysis.css'
const InvoiceAnalysis = () => {
  return (
    <div className='content-wrapper'>
      <div className='card px-4'>
        <div className='d-flex justify-content-center my-5'>
          <h4 className='invoice-analysis-h4'>Analysis</h4>
          {/* <hr className='separator-analysis' /> */}
          <h1 className='d-flex justify-content-center invoice-analysis-h1'>RECEIVED</h1>
          <h1 className='dfc-amount'>DFC 0.00</h1>
          {/* <hr className='separator-analysis' /> */}
        </div>
      </div>
    </div>
  )
}

export default InvoiceAnalysis
