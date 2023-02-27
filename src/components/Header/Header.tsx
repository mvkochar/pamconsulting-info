import React from 'react'
import ActionButton from '../ActionButton/ActionButton'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
       <div className="container d-f jc-sb align-center">
          <div className="header-logo"><img src="images/logo.svg" alt="" /></div>
          <nav>
              <ul className= "nav-list d-f">
                <li className="nav-list-item"><a href="">Home</a></li>
                <li className="nav-list-item"><a href="">About us</a></li>
                <li className="nav-list-item"><a href="">Services</a></li>
                <li className="nav-list-item"><a href="">Invest in Cyprus</a></li>
                <li className="nav-list-item"><a href="">Migration</a></li>
                <li className="nav-list-item"><a href="">Contact us</a></li>
              </ul>
          </nav>
          <ActionButton title='Get in touch'/>
       </div>
    </header>
  )
}

export default Header