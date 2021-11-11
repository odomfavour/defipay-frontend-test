/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import {Error500} from './components/Error500'
import {Error404} from './components/Error404'
import {toAbsoluteUrl} from '../../../shared/helpers'

const ErrorsPage: React.FC = () => {
  const history = useHistory()
  const redirectToDashboard = () => {
    history.push('/')
  }

  return (
    <div className='d-flex flex-column flex-root'>
      <div
        className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
        style={{backgroundImage: `url('${toAbsoluteUrl('/media/illustrations/progress-hd.png')}')`}}
      >
        <div className='d-flex flex-column flex-column-fluid text-center p-10 py-lg-20'>
          <h1 className='mb-10 pt-lg-20'>DefiPay</h1>
          <div className='pt-lg-10 mb-10'>
            <Switch>
              <Route path='/error/404' exact={true}>
                <Error404 />
              </Route>
              <Route path='/error/500' exact={true}>
                <Error500 />
              </Route>
              <Redirect from='/error' exact={true} to='/error/404' />
              <Redirect to='/error/404' />
            </Switch>

            <div className='text-center'>
              <a onClick={redirectToDashboard} className='btn btn-lg btn-primary fw-bolder'>
                Go to homepage
              </a>
            </div>
          </div>
          <div
            className='
          d-flex
          flex-row-auto
          bgi-no-repeat
          bgi-position-x-center
          bgi-size-contain
          bgi-position-y-bottom
          min-h-100px min-h-lg-350px
        '
            style={{
              backgroundImage: `url('${toAbsoluteUrl('/media/illustrations/sketchy-1/17.png')}')`,
            }}
          ></div>
        </div>

        <div className='d-flex flex-center flex-column-auto p-10'>
          <div className='d-flex align-items-center fw-bold fs-6'></div>
        </div>
      </div>
    </div>
  )
}

export {ErrorsPage}
