import React, {FC} from 'react'
import {Table} from 'react-bootstrap-v5'
import {Link} from 'react-router-dom'
import {InvoiceViewModel} from '..'
type Props = {
  invoices?: InvoiceViewModel[]
}

const InvoiceGridView: FC<Props> = ({invoices}) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>Status</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Invoice No</th>
            <th>Offline Ref</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {invoices?.map((x) => (
            <tr key={x.invoiceId.toString()}>
              <td
                style={{
                  background: x.status === 'Unpaid' ? '#2D294E' : '#FFBF18',
                  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                  width: '4px',
                  height: '4px',
                  clipPath: 'circle(10%)',
                  position: 'relative',
                  marginRight: '5px',
                }}
              ></td>
              <td>{x.status}</td>
              <td>
                {x.firstName} {x.lastName}
              </td>
              <td>{x.amount}</td>
              <td>{x.invoiceNumber}</td>
              <td>{x.offlineRef}</td>
              <td>{x.invoiceDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default InvoiceGridView
