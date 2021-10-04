import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../shared/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'

export function PrivateRoutes() {
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))


  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/crafted/account' component={AccountPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect from='/home' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
