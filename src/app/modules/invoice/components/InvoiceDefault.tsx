import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
type Props = {
  handleShow: () => void
  businessname: String | undefined
}
const InvoiceDefault: FC<Props> = ({handleShow, businessname}) => {
  return (
    <div>
      <section className='min-card d-flex justify-content-center align-items-center'>
        <div>
          <div className='text-center'>
            <img src={toAbsoluteUrl('../media/images/Vector.png')} className='img-fluid' alt='' />
          </div>
          <span className='card-title d-flex justify-content-center title-extension'>
            Hello, {businessname}
          </span>
          <p className='card-text d-flex justify-content-center text-extension'>
            Send a simple or detailed invoice to your customer with this feature
          </p>
          <div className='text-center'>
            <button
              className='btn main-btn'
              type='button'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              onClick={handleShow}
            >
              + Request a Payment
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

InvoiceDefault.propTypes = {}

export default InvoiceDefault
