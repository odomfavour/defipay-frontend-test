/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import * as authactions from '../redux/AuthActions'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {register} from '../redux/AuthCRUD'
import {MerchantRegisterModel} from '../models/MerchantRegisterModel'
import {Link} from 'react-router-dom'

const initialValues = {
  password: '',
  confirmPassword: '',
  email: '',
  businessname: '',
  countrycode: '',
}

const passwordSetupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Minimum 8 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
})
export function PasswordSetup() {
  const [loading, setLoading] = useState(false)
  const [passError, setPassError] = useState({
    passwordLength: false,
    lowChar: false,
    UpperChar: false,
    specialChar: false,
    includesNumber: false
  });
  const [passwordLength, setPasswordLength] = useState(false)
  const [lowChar, setLowChar] = useState(false)
  const [upperChar, setUpperChar] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [includesNumber, setIncludesNumber] = useState(false)

  const businessname = localStorage.getItem('businessname')
  const emailaddress = localStorage.getItem('email')
  const countrycode = localStorage.getItem('countrycode')
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: passwordSetupSchema,
    validate: ({ password }) => {
      console.log(`I know your password: ${password}`);
       if (password.length >= 8) {
        setPasswordLength(true);
      } else {
        setPasswordLength(false);
      }
      
      if (/[A-Z]+/g.test(password)) {
        setUpperChar(true);
      } else {
        setUpperChar(false);
      }
      
      if (/[a-z]+/g.test(password)) {
        setLowChar(true);
      } else {
        setLowChar(false);
      }
      
      if (/[0-9]+/g.test(password)) {
        setIncludesNumber(true);
      } else {
        setIncludesNumber(false);
      }

      if(/[`!@#$%^&*()_+\-=[\]{};':"|,.<>/?~]/g.test(password)){
        setSpecialChar(true)
      } else {
        setSpecialChar(false)
      }

      console.log(JSON.stringify(passError));
      console.log(setPassError({passwordLength: false,
        lowChar: false,
        UpperChar: false,
        specialChar: false,
        includesNumber: false}))

    },
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        //Get the Saved data in local storage
        // To retrieve data
        values.businessname = businessname !== null ? businessname.toString() : ''
        values.email = emailaddress !== null ? emailaddress.toString() : ''
        values.countrycode = countrycode !== null ? countrycode.toString() : ''
        if (values.businessname === null || values.businessname === '') {
          setStatus('Registration process has broken')
        }

        if (values.email === null || values.email === '') {
          setStatus('Registration process has broken')
        }

        if (values.countrycode === null || values.countrycode === '') {
          setStatus('Registration process has broken')
        }
        register(values.email, values.businessname, values.countrycode, values.password)
          .then((res) => {
            console.log(res.data)
            if (res.data.success) {
              setLoading(false)
              const merchant: MerchantRegisterModel = {
                userId: res.data.data.userid,
                email: res.data.data.email,
              }
              dispatch(authactions.actions.verifyemail(merchant))
              window.location.href = `/auth/verifyemail/${res.data.data.userid}`
            }
          })
          .catch((e) => {
            setLoading(false)
            setSubmitting(false)
            if (e.response && e.response.data) {
              setStatus(e.response.data.message)
            } else if (e.request) {
              setStatus('Registration process has broken')
            } else {
              setStatus('Registration process has broken')
            }
          })
      }, 1000)
    },
  })
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])
  return (
    <>
      <div
        className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
        style={{
          backgroundColor: '#333067',
        }}
      >
        {/* begin::Content */}
        <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
          {/* begin::Logo */}
          <h2 className='mb-12' style={{color: 'white'}}>
            DefiPay
          </h2>
          <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
            <form
              className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
              noValidate
              id='kt_login_password_setup_form'
              onSubmit={formik.handleSubmit}
            >
              <div className='text-center mb-10'>
                <h1 className='text-dark mb-3'>Setup Password</h1>
              </div>
              {/* end::Heading */}
              {formik.status && (
                <div className='mb-lg-15 alert alert-danger'>
                  <div className='alert-text font-weight-bold'>{formik.status}</div>
                </div>
              )}
              {/* begin::Form group */}
              <div className='fv-row mb-10'>
                <label className='form-label fw-bolder text-gray-900 fs-6'>Password</label>
                <input
                  type='password'
                  placeholder=''
                  autoComplete='off'
                  {...formik.getFieldProps('password')}
                  className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {'is-invalid': formik.touched.password && formik.errors.password},
                    {
                      'is-valid': formik.touched.password && !formik.errors.password,
                    }
                  )}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.password}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
              <div className="mb-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="passwordLength" checked={passwordLength} readOnly />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                  Not less than 8 characters
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="upperChar" checked={upperChar} readOnly/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                  One uppercase Character eg A
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="includesNumber" checked={includesNumber} readOnly/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                  At least one number e.g 1
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="specialChar" checked={specialChar} readOnly/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                  One special characters eg @
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="lowChar" checked={lowChar} readOnly/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                  One Lowercase characters e.g a
                  </label>
                </div>
              </div>
              {/* begin::Form group */}
              <div className='fv-row mb-10 mt-5'>
                <label className='form-label fw-bolder text-gray-900 fs-6'>Confirm Password</label>
                <input
                  type='password'
                  placeholder=''
                  autoComplete='off'
                  {...formik.getFieldProps('confirmPassword')}
                  className={clsx(
                    'form-control form-control-lg form-control-solid',
                    {'is-invalid': formik.touched.confirmPassword && formik.errors.confirmPassword},
                    {
                      'is-valid': formik.touched.confirmPassword && !formik.errors.confirmPassword,
                    }
                  )}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.confirmPassword}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
              <div className="form-check my-4">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  By creating this account, you agree to accept our <Link to="#">Privacy Policy</Link>
                  and <Link to="#">Terms of Service</Link>.
                </label>
              </div>
              {/* begin::Form group */}
              <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
                <button
                  type='submit'
                  id='kt_password_reset_submit'
                  className='btn btn-lg defi-base-button fw-bolder me-4'
                  disabled={formik.isSubmitting || !formik.isValid || formik.isValidating}
                >
                  {!loading && <span className='indicator-label'>Submit</span>}
                  {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
          {/* end::Content */}
        </div>
      </div>
    </>
  )
}
