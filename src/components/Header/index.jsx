import React from 'react'
import './index.css'
import LogoPicture from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='container-header'>
      <header className="header-logo">
        <img className='logo-picture' src={LogoPicture} alt="" />
        <p className='busines'>Personal <span className='or'>|</span> <span>Business</span></p>
        <div className="data">
            <NavLink className="link" to="/">Send Money</NavLink>
            <NavLink className="link" to="/">Converter</NavLink>
            <NavLink className="link" to="/">Currency API</NavLink>
            <NavLink className="link" to="/">Tools</NavLink>
            <NavLink className="link" to="/">Resources</NavLink>
        </div>

        <div className="btns">
            <button className="one">Sign In</button>
            <button className="two">Register</button>
        </div>
      </header>
    </div>
  )
}

export default Header
