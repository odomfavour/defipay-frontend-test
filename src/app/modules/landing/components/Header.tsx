/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
export function Header() {
    return (
        <header className='header-area'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="main-nav">
                            <a href="#" className="logo">
                            <h3 className="light-logo"> Defipay</h3>
                            <h3 className="dark-logo"> Defipay</h3>
                             </a>
                             <ul className="nav" style={{textAlign:'center'}}>
							<li><a href="#l">Home</a></li>
							<li><a href="#">Trade</a></li>
							<li><a href="#">About</a></li>
							
							<li><a href="#">Blog</a></li>
							<li><a href="#" className="btn-nav-line">CONTACT</a></li>
						</ul>
						<a className="menu-trigger">
							<span>Menu</span>
						</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
