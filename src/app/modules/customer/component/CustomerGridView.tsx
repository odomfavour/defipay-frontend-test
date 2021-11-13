import React, {FC} from 'react'
import {Table} from 'react-bootstrap-v5'
import {Link} from 'react-router-dom'
import {CustomerViewModel} from '..'
type Props = {
  customers?: CustomerViewModel[]
}

const InvoiceGridView: FC<Props> = ({customers}) => {
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
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((x) => (
            <tr key={x.customerid.toString()}>
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
              <td>{x.emailAddress}</td>
              <td>{x.phoneNumber}</td>
              <td>
                {<Link to={'/invoice/getinvoice' + x.customerid.toString()}>Update Details</Link>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default InvoiceGridView
