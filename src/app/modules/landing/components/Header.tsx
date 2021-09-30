/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
export function Header() {
  // function scrollNavBar = ()=> {
  // 	var width = $(window).width();
  // 	if(width > 991) {
  // 		var scroll = $(window).scrollTop();
  // 		if (scroll >= 30) {
  // 			$(".header-area").addClass("header-sticky");
  // 			$(".header-area .dark-logo").css('display', 'block');
  // 			$(".header-area .light-logo").css('display', 'none');
  // 		}else{
  // 			$(".header-area").removeClass("header-sticky");
  // 			$(".header-area .dark-logo").css('display', 'none');
  // 			$(".header-area .light-logo").css('display', 'block');
  // 		}
  // 	}
  // }
  return (
    <header className='header-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <nav className='main-nav'>
              <a href='#' className='logo'>
                <h3 className='light-logo'> Defipay</h3>
                <h3 className='dark-logo'> Defipay</h3>
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
