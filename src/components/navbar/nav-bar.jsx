import React from 'react'
import './nav-bar.css'
import Portfolio from '../portfolio/portfolio'

const Nav_bar = () => {
  return (
    <nav className="navbar">

        <ul className="navbar-list">

          <li className="navbar-item">
            About
          </li>

          <li className="navbar-item" >
            Resume
          </li>

          <li className="navbar-item" >
            Portfolio
          </li>

          <li className="navbar-item" >
            Contact
          </li>

        </ul>

      </nav>
  )
}

export default Nav_bar