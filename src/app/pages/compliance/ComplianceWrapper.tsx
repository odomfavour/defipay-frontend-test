import React, {FC, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../shared/layout/core'
import AccountComponent from '../../modules/compliance/components/AccountComponent'
import CompanyComponent from '../../modules/compliance/components/CompanyComponent'
import OwnerIdComponent from '../../modules/compliance/components/OwnerIdComponent'
import ProfileComponent from '../../modules/compliance/components/ProfileComponent'
import './compliance.css'

// const setStep  = () => {
//   [activeStep, setActiveStep] = useState(0);
// }

const ComplianceWrapper: FC = () => {
  const intl = useIntl()
  const [activeStep, setActiveStep] = useState(0)
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.COMPLIANCE'})}</PageTitle>
      <div className='row g-5 gx-xxl-8'>
        <div className='d-flex'>
          <div className='d-card'>
            <div className='my-5'>
              <div className='d-flex justify-content-between d-heading my-5'>
                <div className='form-check'>
                  <label className='form-check-label' htmlFor='flexCheckDefault'>
                    Profile
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                    checked={activeStep > 0 ? true : false}
                  />
                </div>
                <div className='form-check'>
                  <label className='form-check-label' htmlFor='flexCheckDefault'>
                    Company
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                    checked={activeStep > 1 ? true : false}
                  />
                </div>
                <div className='form-check'>
                  <label className='form-check-label' htmlFor='flexCheckDefault'>
                    Owner
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                    checked={activeStep > 2 ? true : false}
                  />
                </div>
                <div className='form-check'>
                  <label className='form-check-label' htmlFor='flexCheckDefault'>
                    Account
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                    checked={activeStep > 3 ? true : false}
                  />
                </div>
              </div>
              <div className='d-flex justify-content-end mb-3'>
                <h6>{activeStep} of 4 steps completed</h6>
              </div>
              <div className='card'>
                <div className='card-body'>
                  {activeStep === 0 ? (
                    <ProfileComponent setActiveStep={setActiveStep} activeStep={activeStep} />
                  ) : activeStep === 1 ? (
                    <CompanyComponent setActiveStep={setActiveStep} activeStep={activeStep} />
                  ) : activeStep === 2 ? (
                    <OwnerIdComponent setActiveStep={setActiveStep} activeStep={activeStep} />
                  ) : activeStep === 3 ? (
                    <AccountComponent setActiveStep={setActiveStep} activeStep={activeStep} />
                  ) : (
                    <section>
                      <h4 className='text-center mb-5'>The following tasks are completed</h4>
                      <div className='d-flex justify-content-between align-items-center mb-5'>
                        <h3>Business information</h3>
                        <button className='btn btn-light'>Edit</button>
                      </div>
                      <div className='d-flex justify-content-between align-items-center mb-5'>
                        <h3>Personal information</h3>
                        <button className='btn btn-light'>Edit</button>
                      </div>
                      <div className='d-flex justify-content-between align-items-center mb-5'>
                        <h3>Owner Verification</h3>
                        <button className='btn btn-light'>Edit</button>
                      </div>
                      <div className='d-flex justify-content-between align-items-center mb-5 border-bottom-2'>
                        <h3>Account details</h3>
                        <button className='btn btn-light'>Edit</button>
                      </div>
                      <div className='mb-5 text-center'>
                        <button className='btn-learning btn btn-warning'>Activate Business</button>
                      </div>
                      <div className='mb-5 text-center'>
                        <button
                          className='btn-learning btn btn-light'
                          onClick={() => setActiveStep(activeStep - 1)}
                        >
                          Prev-All Done
                        </button>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export {ComplianceWrapper}
