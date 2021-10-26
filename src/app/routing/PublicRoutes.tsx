import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
  Login,
  Registration,
  ForgotPassword,
  ConfirmEmail,
  VerifyEmail,
  PasswordSetup,
  BusinessType,
  GoToDashboard,
} from '../modules/auth'
import {HomePage} from '../modules/landing'

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
      <Route path='/auth/business-type' component={BusinessType} />
    </Switch>
  )
}
