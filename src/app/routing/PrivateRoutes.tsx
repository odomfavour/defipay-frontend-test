import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../shared/partials'
import {ComplianceWrapper} from '../pages/compliance/ComplianceWrapper'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {GetStartedWrapper} from '../pages/getstarted/GetStartedWrapper'
import {OnetimePaymentWrapper} from '../pages/onetimepayment/OnetimePaymentWrapper'

export function PrivateRoutes() {
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/getstarted' component={GetStartedWrapper} />
        <Route path='/compliance' component={ComplianceWrapper} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/commerce/onetimepayment' component={OnetimePaymentWrapper} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect from='/home' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
