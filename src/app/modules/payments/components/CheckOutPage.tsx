import React from 'react'
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
const CheckOutPage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: checkoutSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {},
  })
  return (
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
        </div>
      </div>
    </div>
  )
}

export default CheckOutPage
