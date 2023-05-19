import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/png/logo.png'

import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/' className='nav__logo'>
          <img src={logo} alt=""/>
        </Link>
        <h2>H.I.P.P.O</h2>
    </div>
  )
}

export default Navbar