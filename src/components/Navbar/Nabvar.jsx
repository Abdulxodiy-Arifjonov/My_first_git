import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
const Nabvar = () => {
  return (
    <div className='navbar_cover'>
         <div className="logo_cover">
            <h1 className='main_logo'><span className="logo">Shop</span>Lify</h1>
         </div>
         <div className="navbars_cover">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <a href="" className="navbar">Categories</a>
            <a href="" className="navbar">Register</a>
         </div>
         <div className="button_cover">
            <button className="login">Login</button>
         </div>
    </div>
  )
}

export default Nabvar