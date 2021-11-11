/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {shallowEqual, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {useLayout} from '../../core'
import {AsideMenu} from './AsideMenu'
import {KTSVG} from '../../../helpers'
import '../../../assets/extracss/SideBar.css'
import {RootState} from '../../../../setup'
import {UserModel} from '../../../../app/modules/auth/models/UserModel'
const AsideDefault: FC = () => {
  const {config, classes} = useLayout()
  const {aside} = config
  const user: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
  return (
    <div
      id='kt_aside'
      className={clsx('aside', classes.aside.join(' '), 'sidebar-adjuster')}
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_aside_mobile_toggle'
    >
      {/* begin::Brand */}
      <div className='aside-logo flex-column-auto white-calculate' id='kt_aside_logo'>
        {/* begin::Aside toggler */}
        {aside.minimize && (
          <div
            id='kt_aside_toggle'
            className='btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle'
            data-kt-toggle='true'
            data-kt-toggle-state='active'
            data-kt-toggle-target='body'
            data-kt-toggle-name='aside-minimize'
          >
            <KTSVG
              path={'/media/icons/duotune/abstract/abs015.svg'}
              className={'svg-icon-1 rotate-180'}
            />
          </div>
        )}
        {/* end::Aside toggler */}
        {aside.theme === 'dark' && (
          <Link to='/dashboard'>
            <h3 style={{color: '#2D294E'}}>Dashboard</h3>
            {/* <img
              alt='Logo'
              className='h-25px logo'
              src={toAbsoluteUrl('/media/logos/logo-1.svg')}
            /> */}
          </Link>
        )}
        {/* end::Logo */}
      </div>
      {/* end::Brand */}

      {/* begin::Aside menu */}
      <div className='aside-menu flex-column-fluid'>
        <div className='text-center'>
          <img className='card-img-top defi-link-image' alt='' src='images/img1' />
          <h2 style={{color: '#ffff'}}>{user.businessname} </h2>
          <h2 style={{color: '#ffff', marginTop: '-20px', marginBottom: '15px'}}>AB 00288 </h2>
        </div>
        <AsideMenu asideMenuCSSClasses={classes.asideMenu} />
      </div>
      {/* end::Aside menu */}
    </div>
  )
}

export {AsideDefault}
