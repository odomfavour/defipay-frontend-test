import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
  Login,
  ForgotPassword,
  ConfirmEmail,
  VerifyEmail,
  PasswordSetup,
  BusinessType,
  GoToDashboard,
} from '../modules/auth'
import Registration from '../modules/auth/components/Registration'
import ResetPassword from '../modules/auth/components/ResetPassword'
import {HomePage} from '../modules/landing'
import {PaymentCheckOutPage} from '../pages/checkout/PaymentCheckOutPage'
import InvoiceDisplayPage from '../pages/invoice/InvoiceDisplayPage'

export function PublicRoutes() {
  return (
    <Switch>
      {/* <Route path='/home' component={HomePage} /> */}
      <Route path='/home' component={HomePage} />
      <Redirect from='/auth' exact={true} to='/auth/login' />
      <Redirect from='/' exact={true} to='/home' />
      <Route path='/auth/login' component={Login} />
      <Route path='/auth/confirmemail' component={ConfirmEmail} />
      <Route path='/auth/gotodashboard' component={GoToDashboard} />
      <Route path='/auth/verifyemail/:id' component={VerifyEmail} />
      <Route path='/auth/registration' component={Registration} />
      <Route path='/auth/forgot-password' component={ForgotPassword} />
      <Route path='/auth/setup-password' component={PasswordSetup} />
      <Route path='/auth/reset-password' component={ResetPassword} />
      <Route path='/auth/business-type' component={BusinessType} />
      <Route path='/otpls/:id' component={PaymentCheckOutPage} />
      <Route path='/inv/:id' component={InvoiceDisplayPage} />
    </Switch>
  )
}
