/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../shared/helpers'
import './Header.css'
export function Header() {
  const [navbar, setNavBar] = useState(false)
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  // const [tooglebar, setToogleBar] = useState(false)
  // const myRef = useRef(null)
  const scrollNavBar = () => {
    // debugger
    const pgwidth = window.innerWidth
    if (pgwidth > 991) {
      const scroll = document.documentElement.scrollTop
      if (scroll >= 30) {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
    } else {
      // setNavBar(true)
    }
  }

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
                  // <h3 className='light-logo'> Defipay</h3>
                  <img
                        src={toAbsoluteUrl('/media/images/defipay-main.jpg')}
                        className='img-fluid'
                        alt=''
                        style={{height: '50px', textAlign: 'center'}}
                      />
                )}
              </a>
              <ul className='nav' style={{textAlign: 'center', display: click ? 'block' : 'none'}}>
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
                <li className='mobile-display'>
                  <Link to='/auth/login'>Login</Link>
                </li>
                <li className='mobile-display'>
                  <Link to='/auth/registration'>Sign Up</Link>
                </li>
                <li>
                  {/* <div className='dropdown'>
                    <img
                      src={toAbsoluteUrl('/media/images/touchbutton.svg')}
                      alt=''
                      className='toggleimage'
                    />
                    <div className='dropdown-content'>
                      <Link to='/auth/login'>Login</Link>
                      <Link to='/auth/registration'>Sign Up</Link>
                    </div>
                  </div> */}
                </li>
              </ul>
              <a className={click ? 'menu-trigger active' : 'menu-trigger'} onClick={handleClick}>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
