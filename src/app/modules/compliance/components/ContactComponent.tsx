import React, {useState, useEffect} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import {CountryModel} from '../../merchant'
import {StateOrRegionModel} from '../../merchant/models/stateorregions/StateOrRegionModel'
type Props = {
  onSetContactStep: () => void
  setActiveStep: Function
  activeStep: number
  countries: CountryModel[]
  states: StateOrRegionModel[]
}

const initialValues = {
  generalMail: '',
  supportMail: '',
  disputeMail: '',
  phoneNumber: '',
  websiteLink: '',
  businessType: '',
  instagram: '',
  twitter: '',
  facebook: '',
  country: '',
  states: '',
  officeAddress: '',
  streetAddress: '',
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const contactSchema = Yup.object().shape({
  generalMail: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('General Mail is required'),
  supportMail: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Support Mail is required'),
  disputeMail: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Dispute Mail is required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is Required'),
  websiteLink: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols'),
  instagram: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols'),
  twitter: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols'),
  facebook: Yup.string().min(3, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols'),
  country: Yup.string().min(1, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols'),
  streetAddress: Yup.string().min(1, 'Minimum 3 symbols').max(50, 'Maximum 50 symbols'),
  officeAddress: Yup.string().min(5, 'Minimum 5 symbols').max(500, 'Maximum 500 symbols'),
})
const ContactComponent: React.FC<Props> = ({
  setActiveStep,
  activeStep,
  countries,
  states,
  onSetContactStep,
}) => {
  const [newstate, setNewStates] = useState<StateOrRegionModel[] | undefined>(undefined)
  const [movecontact, setMoveContact] = useState(false)
  useEffect(() => {
    if (movecontact === true) {
      onSetContactStep()
      // setActiveStep(activeStep + 1)
    }
  })
  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setMoveContact(true)
      setSubmitting(true)
      setTimeout(() => {
        // onClick={() => setActiveStep(activeStep + 1)}
        // let data = {
        //   emailAddress: values.emailAddress,
        //   firstName: values.firstName,
        //   lastName: values.lastName,
        //   phoneNumber: values.phoneNumber,
        // } as ProfileModel
        // createCustomer(data)
        //   .then((res) => {
        //     Swal.fire({
        //       title: 'Success!',
        //       text: 'Invoice Created Successfully',
        //       icon: 'success',
        //       confirmButtonText: 'Ok',
        //     } as SweetAlertOptions).then(() => {
        //       setLoading(false)
        //       resetForm()
        //     })
        //   })
        //   .catch((e) => {
        //     setLoading(false)
        //     setSubmitting(false)
        //     if (e.response) {
        //       setStatus(e.response.data.message)
        //     } else if (e.request) {
        //       setStatus('The Customer page detail is incorrect')
        //     } else {
        //       setStatus('The Customer page detail is incorrect')
        //     }
        //   })
      }, 1000)
    },
  })

  const onChangeCountry = (e: React.FormEvent<HTMLSelectElement>) => {
    formik.setFieldValue('country', e.currentTarget.value)
    setNewStates(states && states.filter((x) => x.countrycode === e.currentTarget.value))
  }
  return (
    <section>
      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div></div>
      )}
      <h3 className='my-4 fw-bold'>Contact</h3>
      <form onSubmit={formik.handleSubmit} noValidate id='kt_contact_form'>
        <div className='mb-5'>
          <input
            type='email'
            className={clsx(
              'form-control',
              {'is-invalid': formik.touched.generalMail && formik.errors.generalMail},
              {
                'is-valid': formik.touched.generalMail && !formik.errors.generalMail,
              }
            )}
            id='generalMail'
            placeholder='General Email'
            {...formik.getFieldProps('generalMail')}
          />
          {formik.touched.generalMail && formik.errors.generalMail && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.generalMail}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <input
            type='email'
            className={clsx(
              'form-control',
              {'is-invalid': formik.touched.supportMail && formik.errors.supportMail},
              {
                'is-valid': formik.touched.supportMail && !formik.errors.supportMail,
              }
            )}
            id='supportMail'
            placeholder='Support Email'
            {...formik.getFieldProps('supportMail')}
          />
          {formik.touched.supportMail && formik.errors.supportMail && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.supportMail}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <input
            type='email'
            className={clsx(
              'form-control',
              {'is-invalid': formik.touched.disputeMail && formik.errors.disputeMail},
              {
                'is-valid': formik.touched.disputeMail && !formik.errors.disputeMail,
              }
            )}
            id='exampleFormControlInput1'
            placeholder='Disputes Email'
            {...formik.getFieldProps('disputeMail')}
          />
          {formik.touched.disputeMail && formik.errors.disputeMail && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.disputeMail}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <input
            type='text'
            className={clsx(
              'form-control',
              {'is-invalid': formik.touched.phoneNumber && formik.errors.phoneNumber},
              {
                'is-valid': formik.touched.phoneNumber && !formik.errors.phoneNumber,
              }
            )}
            id='exampleFormControlInput1'
            placeholder='Phone Number'
            {...formik.getFieldProps('phoneNumber')}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.phoneNumber}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <input
            type='text'
            className={clsx(
              'form-control',
              {'is-invalid': formik.touched.websiteLink && formik.errors.websiteLink},
              {
                'is-valid': formik.touched.websiteLink && !formik.errors.websiteLink,
              }
            )}
            id='exampleFormControlInput1'
            placeholder='Website Link for your business'
            {...formik.getFieldProps('websiteLink')}
          />
          {formik.touched.websiteLink && formik.errors.websiteLink && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.websiteLink}</span>
            </div>
          )}
        </div>

        <h4 className='mb-3' style={{color: 'rgba(45, 41, 78, 0.55)'}}>
          Your business link on social media
        </h4>
        <small className='mb-3' style={{color: 'rgba(45, 41, 78, 0.55)'}}>
          Where can your business be found on social networks
        </small>
        <div className='mb-5'>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='basic-addon1'>
              + Instagram
            </span>
            <input
              type='text'
              className={clsx(
                'form-control',
                {'is-invalid': formik.touched.instagram && formik.errors.instagram},
                {
                  'is-valid': formik.touched.instagram && !formik.errors.instagram,
                }
              )}
              placeholder='https://instagram.com/defipay22os'
              aria-label='instagram'
              aria-describedby='basic-addon1'
              {...formik.getFieldProps('instagram')}
            />
            {formik.touched.instagram && formik.errors.instagram && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.instagram}</span>
              </div>
            )}
          </div>

          <div className='input-group mb-3'>
            <span className='input-group-text' id='basic-addon1'>
              + Twitter
            </span>
            <input
              type='text'
              className={clsx(
                'form-control',
                {'is-invalid': formik.touched.twitter && formik.errors.twitter},
                {
                  'is-valid': formik.touched.twitter && !formik.errors.twitter,
                }
              )}
              placeholder='https://Twitter.com/defipay22os'
              aria-label='twitter'
              aria-describedby='basic-addon1'
              {...formik.getFieldProps('twitter')}
            />
            {formik.touched.twitter && formik.errors.twitter && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.twitter}</span>
              </div>
            )}
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='basic-addon1'>
              + Facebook
            </span>
            <input
              type='text'
              className={clsx(
                'form-control',
                {'is-invalid': formik.touched.facebook && formik.errors.facebook},
                {
                  'is-valid': formik.touched.facebook && !formik.errors.facebook,
                }
              )}
              placeholder='https://facebook.com/defipay22os'
              aria-label='twitter'
              aria-describedby='basic-addon1'
              {...formik.getFieldProps('facebook')}
            />
            {formik.touched.facebook && formik.errors.facebook && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.facebook}</span>
              </div>
            )}
          </div>
        </div>
        <h4 className='mb-3'>Office Address</h4>
        <div className='mb-5'>
          <input
            type='text'
            className={clsx(
              'form-control',
              {'is-invalid': formik.touched.officeAddress && formik.errors.officeAddress},
              {
                'is-valid': formik.touched.officeAddress && !formik.errors.officeAddress,
              }
            )}
            id='exampleFormControlInput1'
            placeholder='Type address here'
            {...formik.getFieldProps('officeAddress')}
          />
        </div>
        <div className='mb-5'>
          <select
            placeholder='Country'
            autoComplete='off'
            onChange={onChangeCountry}
            // {...formik.getFieldProps('country')}
            className={clsx(
              'form-select form-control-lg form-control-solid',
              {'is-invalid': formik.touched.country && formik.errors.country},
              {
                'is-valid': formik.touched.country && !formik.errors.country,
              }
            )}
          >
            <option value=''>Select Country</option>
            {countries &&
              countries.map((x) => (
                <option value={x.countrycode.toString()} key={x.countrycode.toString()}>
                  {x.name}
                </option>
              ))}
          </select>
          {formik.touched.country && formik.errors.country && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.country}</span>
              </div>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <select
            placeholder='State'
            autoComplete='off'
            {...formik.getFieldProps('states')}
            className={clsx(
              'form-select form-control-lg form-control-solid',
              {'is-invalid': formik.touched.states && formik.errors.states},
              {
                'is-valid': formik.touched.states && !formik.errors.states,
              }
            )}
          >
            <option value=''>Select State</option>
            {newstate &&
              newstate.map((x) => (
                <option value={x.stateid.toString()} key={x.stateid.toString()}>
                  {x.name}
                </option>
              ))}
          </select>
          {formik.touched.states && formik.errors.states && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.states}</span>
              </div>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <input
            type='text'
            autoComplete='off'
            className={clsx(
              'form-control',
              {'is-invalid': formik.touched.streetAddress && formik.errors.streetAddress},
              {
                'is-valid': formik.touched.streetAddress && !formik.errors.streetAddress,
              }
            )}
            id='exampleFormControlInput1'
            placeholder='Type address here'
            {...formik.getFieldProps('streetAddress')}
          />
        </div>
        <div className='text-center'>
          <button
            className='btn btn-warning'
            onClick={() => setActiveStep(activeStep - 1)}
            type='button'
          >
            prev
          </button>
          <button className='btn btn-warning' type='submit'>
            Next
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactComponent
