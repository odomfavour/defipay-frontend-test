import React from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
const initialValues = {
    monthly: 0,
    period: 0,
  }
  const checkoutSchema = Yup.object().shape({
    monthly: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
    period: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Password is required'),
  })
const InvoicePage = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: checkoutSchema,
        onSubmit: (values, {setStatus, setSubmitting}) => {},
      })
    
      // const [show, setShow] = useState(false)
      // const handleClose = () => setShow(false)
      // const handleOpen = () => setShow(true)
    return (
        <div>
            <div className='checkout-box-wrapper'>
      <div className='card'>
        <div className='card-body'>
          <img className='card-img-top defi-link-image' alt='' src='images/img1' />
          <p className='d-flex justify-content-center defi-compliance-link-description'>
            Subscribe to Plan: AY Motors
          </p>
          <p className='d-flex justify-content-center defi-compliance-link-description'>
            BY HGR GLOBAL RESOURCES
          </p>
          <div className="my-3">
            <h6>Confirm your billing cycle</h6>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label>Monthly (DFC)</label>
              <input
                type='number'
                min='100'
                className={clsx(
                  'form-control form-control-solid',
                  {'is-invalid': formik.touched.monthly && formik.errors.monthly},
                  {
                    'is-valid': formik.touched.monthly && !formik.errors.monthly,
                  }
                )}
                id='pagename'
                autoComplete='off'
                placeholder='Monthly'
                {...formik.getFieldProps('monthly')}
              />
            </div>
            <div className='col-md-6'>
              {' '}
              <label>Period (Months)</label>
              <input
                type='number'
                min='1'
                max='12'
                className={clsx(
                  'form-control form-control-solid',
                  {'is-invalid': formik.touched.period && formik.errors.period},
                  {
                    'is-valid': formik.touched.period && !formik.errors.period,
                  }
                )}
                id='pagename'
                autoComplete='off'
                placeholder='Period'
                {...formik.getFieldProps('period')}
              />
            </div>
          </div>
          <div className="mt-5 mb-5">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
                </div>
              </div>
            </div>
            <small>Your billing begins on October 11 2021 and will end on March 11 2022</small>
          </div>
          <div className="mb-5">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address"/>
          </div>
          <div className="text-center mb-5">
            <button className="btn main-btn" >Pay Now</button>
          </div>
          <small>To avoid being charged , we will send an email 7 days to the due date</small>
          <h4 className="mt-5">Secured by DefiPay CRYPTO, QR, BANK, USSD, TRANSFER</h4>
        </div>
      </div>
    </div>
        </div>
    )
}

export default InvoicePage
