import React, {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup'
import {PageTitle} from '../../../shared/layout/core'
import {UserModel} from '../../modules/auth/models/UserModel'
import AccountComponent from '../../modules/compliance/components/AccountComponent'
import ContactComponent from '../../modules/compliance/components/ContactComponent'
import OwnerIdComponent from '../../modules/compliance/components/OwnerIdComponent'
import ProfileComponent from '../../modules/compliance/components/ProfileComponent'
import {CountryModel, IndustryModel} from '../../modules/merchant'
import './compliance.css'
import * as merchantActions from '../../modules/merchant/redux/MerchantActions'
import {IndustryCategoryModel} from '../../modules/merchant/models/industrycategory/IndustryCategoryModel'
import {StateOrRegionModel} from '../../modules/merchant/models/stateorregions/StateOrRegionModel'
// const setStep  = () => {
//   [activeStep, setActiveStep] = useState(0);
// }

const ComplianceWrapper: FC = () => {
  const user: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  const industries: IndustryModel[] = useSelector<RootState>(
    ({merchant}) => merchant.industry,
    shallowEqual
  ) as IndustryModel[]

  const industrycategory: IndustryCategoryModel[] = useSelector<RootState>(
    ({merchant}) => merchant.industrycategory,
    shallowEqual
  ) as IndustryCategoryModel[]

  const countries: CountryModel[] = useSelector<RootState>(
    ({merchant}) => merchant.country,
    shallowEqual
  ) as CountryModel[]

  const states: StateOrRegionModel[] = useSelector<RootState>(
    ({merchant}) => merchant.states,
    shallowEqual
  ) as StateOrRegionModel[]
  console.log('state', states)
  const dispatch = useDispatch()
  // const [refereshkey, setRefreshkey] = useState(0)
  useEffect(() => {
    dispatch(merchantActions.actions.getindustry())
    dispatch(merchantActions.actions.getcountry())
    dispatch(merchantActions.actions.getstates())
    dispatch(merchantActions.actions.getindustrycategory())
  }, [dispatch])
  const intl = useIntl()
  const [activeStep, setActiveStep] = useState(0)
  const onSetProfileStep = () => {
    setActiveStep(activeStep + 1)
  }
  const onSetContactStep = () => {
    console.log('its happneind')
    setActiveStep(activeStep + 1)
  }
  const onSetOwnerStep = () => {
    console.log('its happneind two')
    setActiveStep(activeStep + 1)
  }
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
                    Contact
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
                    <ProfileComponent
                      onSetProfileStep={onSetProfileStep}
                      activeStep={activeStep}
                      userdetails={user}
                      industry={industries}
                      industrycategory={industrycategory}
                    />
                  ) : activeStep === 1 ? (
                    <ContactComponent
                      countries={countries}
                      states={states}
                      onSetContactStep={onSetContactStep}
                      setActiveStep={setActiveStep}
                      activeStep={activeStep}
                    />
                  ) : activeStep === 2 ? (
                    <OwnerIdComponent
                      countries={countries}
                      onSetOwnerStep={onSetOwnerStep}
                      setActiveStep={setActiveStep}
                      activeStep={activeStep}
                    />
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
