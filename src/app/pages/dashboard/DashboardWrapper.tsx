/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../shared/layout/core'
import { UserModel } from '../../modules/auth/models/UserModel'
import { RootState } from '../../../setup'
// import EarningsGraph from '../../modules/payments/components/EarningsGraph'
import './Dashboard.css'
import { GoToDashboardModal } from '../../modules/dashboard'
import TransactionForm from '../../modules/landing/components/TransactionForm'

const DashboardPage: FC = () => (
  
  <>
    <div className="main-wrapper d-flex justify-content-center align-items-center home-section">
      <div className="center-card">
        <div className="card-body ">
          <TransactionForm main={612}/>
        </div>

      </div>
    </div>
    {/* <div className='row g-5 gx-xxl-8'>
      <div className="col-md-9">
        <div className="card">
          <div className="card-body">
            <div className="top-section">
              <div className="row">
                <div className="col-md-3">
                  <div className="mt-3">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Past 30 days</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center my-2">
              <h1>Earnings <span>DFC 0.00</span></h1>
            </div>
            <EarningsGraph/>
            <section className="mt-5">
              <div className="row">
                <div className="col-md-6 b-right">
                  <div className="px-5">
                    <p className="mb-0">payment Errors</p>
                    <p className="mb-0">System Errors</p>
                    <p className="mb-0">Client Errors</p>
                    <p className="mb-0">Sharp Practices</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="px-5">
                    <p className="mb-0">Completion Rate</p>
                    <p className="mb-0">Transactions</p>
                    <p className="mb-0">Abandoned</p>
                    <p  className="mb-0">Pass rate: 0%</p>
                    <p  className="mb-0">Processing errors</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <div className="top-section mb-5">
              </div>
              <div className="balance-section text-center px-5">
                <div>
                  <p className="mt-5 pt-5">Balance</p>
                  <h1 className="mb-5">DFC <span className="font-weight-bold">0.00</span></h1>
                  <div className="mt-5">
                    <button className="btn btn-light w-100">Withdraw</button>
                  </div>
                  <div className="mt-5">
                    <button className="btn btn-light w-100">Top Up</button>
                  </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  const user: UserModel = useSelector<RootState>(({ auth }) => auth.user, shallowEqual) as UserModel

  // console.log('miccheck', user.businessname)
  const intl = useIntl()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('shw_gt_dsh') === null) {
      setShow(true)
    }
  }, [])
  const checkStatus = () => {
    alert()
    if (localStorage.getItem('shw_gt_dsh') === null) {
      setShow(true)
    }
  }
  const handleClose = () => {
    localStorage.setItem('shw_gt_dsh', 'nts')
    setShow(false)
  }
  window.addEventListener('load', checkStatus)
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
      {/* <BusinessActivation businessName={'alloy'} accountMode={true} /> */}
      {/* <BusinessActivation businessName={user.businessname} accountMode={user.accountmodel} /> */}
      <GoToDashboardModal show={show} handleClose={handleClose} businessName={'alloy'} />
      {/* <GoToDashboardModal show={show} handleClose={handleClose} businessName={user.businessname} /> */}
    </>
  )
}

export { DashboardWrapper }
