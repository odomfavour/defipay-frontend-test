/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'


const HeaderUserMenu: FC = () => {
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-5'>
        <Link to={'/crafted/pages/profile'} className='menu-link px-5'>
          Profile
        </Link>
      </div>
      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          <span className='menu-text'>Preferences</span>
        </a>
      </div>
      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          <span className='menu-text'>Permission</span>
        </a>
      </div>
      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          <span className='menu-text'>Support</span>
        </a>
      </div>
      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to='/logout' className='menu-link px-5'>
          Log Out
        </Link>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
