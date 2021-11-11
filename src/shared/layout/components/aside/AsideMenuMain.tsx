/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {toAbsoluteUrl} from '../../../helpers'
import '../../../assets/extracss/SideBar.css'
export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/getstarted'
        icon=''
        title={intl.formatMessage({id: 'MENU.GETSTARTED'})}
        fontIcon='bi-app-indicator'
      />
      <br />
      <AsideMenuItem
        to='/dashboard'
        icon=''
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      {/* <b></b>
      <b></b> */}
      <br />
      <AsideMenuItem
        to='/compliance'
        icon=''
        title={intl.formatMessage({id: 'MENU.COMPLIANCE'})}
        fontIcon='bi-app-indicator'
      />
      <br />
      <AsideMenuItemWithSub
        to='/crafted/pages/profile'
        title={intl.formatMessage({id: 'MENU.COMMEERCE'})}
        hasBullet={false}
      >
        <AsideMenuItem to='/crafted/pages/profile/overview' title='PRODUCTS' hasBullet={false} />
        <AsideMenuItem to='/crafted/pages/profile/projects' title='STOREFRONTS' hasBullet={false} />
        <AsideMenuItem to='/crafted/pages/profile/campaigns' title='ORDERS' hasBullet={false} />
        <AsideMenuItem
          to='/onetimepayment'
          title='PAYMENT PAGES'
          hasBullet={false}
        />
        <AsideMenuItem
          to='/crafted/pages/profile/connections'
          title='Connections'
          hasBullet={false}
        />
      </AsideMenuItemWithSub>
      <br />
      <AsideMenuItemWithSub
        to='/crafted/pages/profile'
        title={intl.formatMessage({id: 'MENU.PAYMENTS'})}
        hasBullet={false}
      >
        <AsideMenuItem to='/crafted/pages/profile/overview' title='PRODUCTS' hasBullet={false} />
        <AsideMenuItem to='/crafted/pages/profile/projects' title='STOREFRONTS' hasBullet={false} />
        <AsideMenuItem to='/crafted/pages/profile/campaigns' title='ORDERS' hasBullet={false} />
        <AsideMenuItem
          to='/crafted/pages/profile/documents'
          title='PAYMENT PAGES'
          hasBullet={false}
        />
        <AsideMenuItem
          to='/crafted/pages/profile/connections'
          title='Connections'
          hasBullet={false}
        />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4' style={{color: '#fffff'}}></div>
          <div className='d-flex justify-content-center'>
            <img src={toAbsoluteUrl('/media/images/defi-sidebar-logo.jpg')} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}
