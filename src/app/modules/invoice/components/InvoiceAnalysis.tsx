import React, {FC} from 'react'
import {InvoiceViewModel} from '..'
import './invoice-analysis.css'
type Props = {
  invoices?: InvoiceViewModel[]
}

const InvoiceAnalysis: FC<Props> = ({invoices}) => {
  return (
    <div className='card px-4 h-100'>
      <div className='top-part'>
        <div className='d-flex align-items-center justify-content-center'>
          <h4 className='mb-0 mt-5 pt-2'>Analysis</h4>
        </div>
      </div>
      <div className='my-5'>
        <div>
          <div>
            {/* <hr className='separator-analysis' /> */}
            <h1 className='invoice-analysis-h1'>RECEIVED</h1>
            <h1 className='dfc-amount'>
              DFC{' '}
              {invoices && invoices.length > 0
                ? invoices
                    .filter((x) => x.status === 'Paid')
                    .reduce((sum: number, current) => sum + Number(current.amount), 0)
                : 0.0}
            </h1>
          </div>
          <div className='status-section py-5'>
            <div className='d-flex justify-content-between'>
              <h4 className='mb-0'>Pending</h4>
              <h4 className='mb-0'>
                DFC{' '}
                {invoices && invoices.length > 0
                  ? invoices
                      .filter((x) => x.status === 'Unpaid')
                      .reduce((sum: number, current) => sum + Number(current.amount), 0)
                  : 0.0}
              </h4>
            </div>
          </div>
          <div className='status-section py-5'>
            <div className='d-flex justify-content-between'>
              <h4 className='mb-0'>Total</h4>
              <h4 className='mb-0'>
                DFC{' '}
                {invoices && invoices.length > 0
                  ? invoices
                      .filter((x) => x.status === 'Unpaid' || x.status === 'Paid')
                      .reduce((sum: number, current) => sum + Number(current.amount), 0)
                  : 0.0}
              </h4>
            </div>
          </div>
        </div>
        {/* <hr className='separator-analysis' /> */}
      </div>
    </div>
  )
}

export default InvoiceAnalysis
