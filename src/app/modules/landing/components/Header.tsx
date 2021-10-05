/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import './Header.css'
export function Header() {
  const [navbar, setNavBar] = useState(false)
  // const [tooglebar, setToogleBar] = useState(false)
  const scrollNavBar = () => {
    const pgwidth = window.innerWidth
    if (pgwidth > 991) {
      const scroll = window.scrollY
      if (scroll >= 30) {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
    }
  }

  const toggleMenu = () => {
    // const trigger = document.querySelector('.menu-trigger')
    // if (trigger.)
  }
  // Menu Dropdown Toggle
  // if ($('.menu-trigger').length) {
  //   $('.menu-trigger').on('click', function () {
  //     $(this).toggleClass('active')
  //     $('.header-area .nav').slideToggle(200)
  //   })
  // }

  window.addEventListener('scroll', scrollNavBar)
  window.addEventListener('click', toggleMenu)

  return (
    <header className={navbar ? 'header-area header-sticky' : 'header-area'}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <nav className='main-nav'>
              <a href='#' className='logo'>
                {navbar ? (
                  <h3 className='dark-logo' style={{display: 'block'}}>
                    {' '}
                    Defipay
                  </h3>
                ) : (
                  <h3 className='light-logo'> Defipay</h3>
                )}
              </a>
              <ul className='nav' style={{textAlign: 'center'}}>
                <li>
                  <a href='#l'>Home</a>
                </li>
                <li>
                  <a href='#'>Trade</a>
                </li>
                <li>
                  <a href='#'>About</a>
                </li>

                <li>
                  <a href='#'>Blog</a>
                </li>
                <li>
                  <div className='dropdown'>
                    <img
                      src={toAbsoluteUrl('/media/images/touchbutton.svg')}
                      alt=''
                      className='toggleimage'
                    />
                    <div className='dropdown-content'>
                      <Link to='/auth/login'>Login</Link>
                      <Link to='/auth/registration'>Sign Up</Link>
                    </div>
                  </div>
                </li>
              </ul>
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
