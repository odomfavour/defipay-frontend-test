/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import './Header.css'
export function Header() {
  const [navbar, setNavBar] = useState(false)
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

  // Menu Dropdown Toggle
  // if ($('.menu-trigger').length) {
  //   $('.menu-trigger').on('click', function () {
  //     $(this).toggleClass('active')
  //     $('.header-area .nav').slideToggle(200)
  //   })
  // }

  window.addEventListener('scroll', scrollNavBar)

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
                  {/* <div className='dropdown'>
                    <button className='dropbtn'>Dropdown</button>
                    <div className='dropdown-content'>
                      <a href='#'>Link 1</a>
                      <a href='#'>Link 2</a>
                      <a href='#'>Link 3</a>
                    </div>
                  </div> */}
                  {/* <ul className=''>
                    <li>
                      <Link to='/auth/login' />
                      Login
                    </li>
                    <li>
                      <Link to='/auth/register' />
                      Sign Up
                    </li>
                  </ul> */}
                  <a href='#' className='btn-nav-line'>
                    CONTACT
                  </a>
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
