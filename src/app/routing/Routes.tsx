/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {FC} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {MasterLayout} from '../../shared/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {PublicRoutes} from './PublicRoutes'
import {Logout} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {RootState} from '../../setup'

const Routes: FC = () => {
  const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)

  return (
    <Switch>
    {!isAuthorized ? <Route><PublicRoutes/></Route> :<Redirect from='/auth' to='/' /> }
      <Route path='/error' component={ErrorsPage} />
      <Route path='/logout' component={Logout} />
      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to='/auth/login' />
      ) : (
        <MasterLayout>
          <PrivateRoutes />
        </MasterLayout>
      )}
    </Switch>
  )
}

export {Routes}
