/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
// import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

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
      {/* <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div> */}
    </>
  )
}
