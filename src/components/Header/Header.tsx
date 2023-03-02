import React from 'react'
import { Link } from 'react-router-dom'
import ActionButton from '../ActionButton/ActionButton'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container d-f jc-sb align-center">
        <div className="header-logo"><img src="images/logo.svg" alt="" /></div>
        <nav className='header-nav'>
          <ul className="nav-list d-f">
            <li className="nav-list-item"><Link to="/">Home</Link></li>
            <li className="nav-list-item"><Link to= 'about'>About us</Link></li>
            <li className="nav-list-item"><a href="">Services</a>
              <ul className="dropdown-list">
                <li className="dropdown-list-item"><a href="">Investments opportunities</a></li>
                <li className="dropdown-list-item"><a href="">Business relocation</a></li>
                <li className="dropdown-list-item"><a href="">Family relocation</a></li>
              </ul>
            </li>
            <li className="nav-list-item"><a href="">Invest in Cyprus</a></li>
            <li className="nav-list-item"><a href="">Migration</a></li>
            <li className="nav-list-item"><a href="">Contact us</a></li>
          </ul>

        </nav>
        <ActionButton title='Get in touch' />
      </div>
    </header>
  )
}

export default Header