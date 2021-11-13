import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../shared/partials'
import {ComplianceWrapper} from '../pages/compliance/ComplianceWrapper'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {GetStartedWrapper} from '../pages/getstarted/GetStartedWrapper'
import {InvoiceWrapper} from '../pages/invoice/InvoiceWrapper'
import {OnetimePaymentWrapper} from '../pages/onetimepayment/OnetimePaymentWrapper'
import {PaymentCheckOutPage} from '../pages/onetimepayment/PaymentCheckOutPage'

export function PrivateRoutes() {
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/getstarted' component={GetStartedWrapper} />
        <Route path='/compliance' component={ComplianceWrapper} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/otpls/:id' component={PaymentCheckOutPage} />
        <Route path='/commerce/onetimepayment' component={OnetimePaymentWrapper} />
        <Route path='/commerce/invoices' component={InvoiceWrapper} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect from='/home' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
