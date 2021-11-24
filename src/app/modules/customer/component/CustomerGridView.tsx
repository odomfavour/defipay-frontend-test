import React, {FC} from 'react'
import {Table} from 'react-bootstrap-v5'
import {CustomerViewModel} from '..'
type Props = {
  customers?: CustomerViewModel[]
  edit: (id: string) => void
}

const CustomerGridView: FC<Props> = ({customers, edit}) => {
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((x) => (
            <tr key={x.customerId.toString()}>
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
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.emailAddress}</td>
              <td>{x.phoneNumber}</td>
              <td>
                <button
                  type='button'
                  className='btn btn-link btn-sm'
                  onClick={() => edit(x.customerId.toString())}
                >
                  Update Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CustomerGridView
