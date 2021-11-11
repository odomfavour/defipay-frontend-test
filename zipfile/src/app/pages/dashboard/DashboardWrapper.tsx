/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {shallowEqual, useSelector} from 'react-redux'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../shared/layout/core'
import {UserModel} from '../../modules/auth/models/UserModel'
import {GoToDashboardModal} from '../../modules/dashboard/components/GoToDashboardModal'
import {RootState} from '../../../setup'

const DashboardPage: FC = () => (
  <>
    <div className='row g-5 gx-xxl-8'></div>
  </>
)

const DashboardWrapper: FC = () => {
  const user: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel

  console.log('miccheck', user.businessname)
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
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
      <GoToDashboardModal show={show} handleClose={handleClose} businessName={user.businessname} />
    </>
  )
}

export {DashboardWrapper}
