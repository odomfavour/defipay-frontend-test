import React, {useEffect, useState} from 'react'
import {UserModel} from '../../auth/models/UserModel'
import {IndustryCategoryModel, IndustryModel} from '../../merchant'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'

type Props = {
  onSetProfileStep: () => void
  activeStep: number
  industry: IndustryModel[]
  userdetails: UserModel
  industrycategory: IndustryCategoryModel[]
}

const profileSchema = Yup.object().shape({
  businessName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Business Name is required'),
  businessDescription: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Business Description is required'),
  staffSize: Yup.string().required('Staff Size is Required'),
  industry: Yup.string().required('Industry is Required'),
  industryCategory: Yup.string().required('Industry Category is Required'),
  businessType: Yup.string().required('Business Type is Required'),
})
const ProfileComponent: React.FC<Props> = ({
  onSetProfileStep,
  activeStep,
  industry,
  userdetails,
  industrycategory,
}) => {
  const [move, setMove] = useState(false)
  const [categories, setCategories] = useState<IndustryCategoryModel[] | undefined>(undefined)
  useEffect(() => {
    if (move === true) {
      onSetProfileStep()
    }
  })
  const initialValues = {
    businessName: userdetails.businessname?.toString() || '',
    businessDescription: '',
    staffSize: '',
    industry: '',
    industryCategory: '',
    businessType: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: profileSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setMove(true)
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

  const onChangeIndustry = (e: React.FormEvent<HTMLSelectElement>) => {
    formik.setFieldValue('industry', e.currentTarget.value)
    console.log('check', e.currentTarget.value)
    setCategories(
      industrycategory &&
        industrycategory.filter((x) => x.industryid === Number(e.currentTarget.value))
    )
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
      <h3 className='my-4 fw-bold'>Profile</h3>
      <form onSubmit={formik.handleSubmit} noValidate id='kt_profile_form'>
        <div className='mb-5'>
          <input
            type='text'
            className={clsx(
              'form-control',
              {'is-invalid': formik.touched.businessName && formik.errors.businessName},
              {
                'is-valid': formik.touched.businessName && !formik.errors.businessName,
              }
            )}
            id='businessName'
            autoComplete='off'
            placeholder='Business Name'
            // readOnly
            {...formik.getFieldProps('businessName')}
          />
          {formik.touched.businessName && formik.errors.businessName && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.businessName}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <input
            type='text'
            className={clsx(
              'form-control',
              {
                'is-invalid':
                  formik.touched.businessDescription && formik.errors.businessDescription,
              },
              {
                'is-valid':
                  formik.touched.businessDescription && !formik.errors.businessDescription,
              }
            )}
            autoComplete='off'
            id='businessDescription'
            placeholder='What do you do? eg. I am a fashion designer'
            {...formik.getFieldProps('businessDescription')}
          />
          {formik.touched.businessDescription && formik.errors.businessDescription && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.businessDescription}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <label>Staff Size</label>
          <select
            className={clsx(
              'form-select',
              {
                'is-invalid': formik.touched.staffSize && formik.errors.staffSize,
              },
              {
                'is-valid': formik.touched.staffSize && !formik.errors.staffSize,
              }
            )}
            aria-label='Default select example'
            {...formik.getFieldProps('staffSize')}
          >
            <option>Staff Size</option>
            <option value='1-5 People'>1-5 people</option>
            <option value='5-50 people'>5-50 people</option>
            <option value='50+ people'>50+ people </option>
          </select>
          {formik.touched.staffSize && formik.errors.staffSize && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.staffSize}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <label>Industry</label>
          <select
            className={clsx(
              'form-control',
              {
                'is-invalid': formik.touched.industry && formik.errors.industry,
              },
              {
                'is-valid': formik.touched.industry && !formik.errors.industry,
              }
            )}
            name='industry'
            // {...formik.getFieldProps('industry')}
            aria-label='Default select example'
            onChange={onChangeIndustry}
          >
            <option value=''>Choose Industry</option>
            {industry &&
              industry.length > 0 &&
              industry.map((x) => (
                <option key={x.id.toString()} value={x.id.toString()}>
                  {x.name}
                </option>
              ))}
          </select>
          {formik.touched.industry && formik.errors.industry && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.industry}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <label>Industry Category</label>
          <select
            {...formik.getFieldProps('industryCategory')}
            className={clsx(
              'form-control',
              {
                'is-invalid': formik.touched.industryCategory && formik.errors.industryCategory,
              },
              {
                'is-valid': formik.touched.industryCategory && !formik.errors.industryCategory,
              }
            )}
            aria-label='Default select example'
          >
            <option value=''>Choose Category</option>
            {categories !== undefined &&
              categories.map((b) => (
                <option key={b.categoryid.toString()} value={b.categoryid.toString()}>
                  {b.categoryname}
                </option>
              ))}
          </select>
          {formik.touched.industryCategory && formik.errors.industryCategory && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.industryCategory}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <label>Business Type</label>
          <select
            className={clsx(
              'form-control',
              {
                'is-invalid': formik.touched.businessType && formik.errors.businessType,
              },
              {
                'is-valid': formik.touched.businessType && !formik.errors.businessType,
              }
            )}
            {...formik.getFieldProps('businessType')}
            aria-label='Default select example'
          >
            <option value=''>Choose Business Type</option>
            <option key='Basic' value='Basic'>
              Basic
            </option>
            <option key='Standard' value='Standard'>
              Standard
            </option>
            <option key='Advanced' value='Advanced'>
              Advanced
            </option>
          </select>
          {formik.touched.businessType && formik.errors.businessType && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.businessType}</span>
            </div>
          )}
        </div>
        <div className='mb-5'>
          <div className='text-center'>
            <button className='btn btn-light' type='button'>
              Cancel
            </button>
            <button className='btn btn-warning' type='submit'>
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ProfileComponent
