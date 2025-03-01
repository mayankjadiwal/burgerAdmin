import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img className='logo' src={assets.burger28_logo} alt="" />
        <img className='profile' src={assets.admin_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
