import React from 'react'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import './checkoutpage.css'
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
const OneTimePaymentCheckout = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: checkoutSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {},
  })
  return (
    <div className='checkout-box-wrapper'>
      <div className='card'>
        <div className='card-body'>
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center mx-auto">
              <div className="company-image">
                <img src={toAbsoluteUrl('/media/images/circle.svg')} alt='' />           
              </div>
            <p className="mb-0 ms-2">SECURE CHECKOUT</p>
          </div>
          </div>
          {/* <img className='card-img-top defi-link-image' alt='' src='images/img1' /> */}
          <p className='d-flex justify-content-center defi-compliance-link-description'>
            AY Motors
          </p>
          <p className='d-flex justify-content-center defi-compliance-link-description'>
            BY HGR GLOBAL RESOURCES
          </p>
          {/* <div className='row'>
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
          </div> */}
          <div className="mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-5">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-5">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
          </div>
          <div className="mb-5">
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
          </div>
          <div className="mb-5">

          </div>
          <div className="row">
            <div className="col-md-4">
            <select className="form-select" aria-label="Default select example">
              <option selected>DFC</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </div>
            <div className="col-md-8">
            <div className="mb-5">
              <input type="text" className="form-control" id="amount" placeholder="5000"/>
            </div>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="payChoice" className="mb-3">Would you like to pay from the following?</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
              <label className="form-check-label" htmlFor="inlineCheckbox1">Pay from my Account Balance</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label className="form-check-label" htmlFor="inlineCheckbox2">Peer to peer</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
              <label className="form-check-label" htmlFor="inlineCheckbox2">Not required</label>
            </div>
          </div>
          <div className="text-center">
            <button className="btn main-btn">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneTimePaymentCheckout
