import React, {FC} from 'react'
import {Table} from 'react-bootstrap-v5'
import {Link} from 'react-router-dom'
import {OneTimePaymentViewModel} from '..'
type Props = {
  paymentpages?: OneTimePaymentViewModel[]
}

const OneTimePaymentGridView: FC<Props> = ({paymentpages}) => {
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
                clipPath: 'circle(10%)',
                position: 'relative',
              }}
            ></th>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Added On</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {paymentpages?.map((x) => (
            <tr key={x.pageid.toString()}>
              <td
                style={{
                  background: '#FFBF18',
                  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                  width: '4px',
                  height: '4px',
                  clipPath: 'circle(10%)',
                  position: 'relative',
                  marginRight: '5px',
                }}
              ></td>
              <td>{x.pagename}</td>
              <td>Payment Page</td>
              <td>{x.amount}</td>
              <td>{x.addedon}</td>
              <td>{<Link to={'/otpls/' + x.pagelink.toString()}>View Link</Link>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default OneTimePaymentGridView
