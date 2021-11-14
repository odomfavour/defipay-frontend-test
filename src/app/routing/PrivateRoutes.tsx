import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../shared/partials'
import {PaymentCheckOutPage} from '../pages/checkout/PaymentCheckOutPage'
import {ComplianceWrapper} from '../pages/compliance/ComplianceWrapper'
import {CustomerPageWrapper} from '../pages/customer/CustomerPageWrapper'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {GetStartedWrapper} from '../pages/getstarted/GetStartedWrapper'
import {InvoiceWrapper} from '../pages/invoice/InvoiceWrapper'
import {OnetimePaymentWrapper} from '../pages/onetimepayment/OnetimePaymentWrapper'
import WalletPageWrapper from '../pages/wallet/WalletPageWrapper'

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
        <Route path='/customers' component={CustomerPageWrapper} />
        <Route path='/wallet' component={WalletPageWrapper} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect from='/home' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
