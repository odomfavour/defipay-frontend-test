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
            <th
              style={{
                background: '#2D294E',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                width: '4px',
                height: '4px',
                clipPath: 'circle',
                position: 'absolute',
              }}
            ></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {invoices?.map((x) => (
            <tr key={x.invoiceid.toString()}>
              <td
                style={{
                  background: '#FFBF18',
                  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                  width: '4px',
                  height: '4px',
                  clipPath: 'circle',
                  position: 'absolute',
                  marginRight: '5px',
                }}
              ></td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.amount}</td>
              <td>{x.status}</td>
              <td>
                {<Link to={'/invoice/getinvoice' + x.invoiceid.toString()}>Update Invoice</Link>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default InvoiceGridView
