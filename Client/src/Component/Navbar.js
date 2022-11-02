import React from 'react'
import { NavLink } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
  return (
      <nav className='navContainer'>
    <div className="logo">
        Learn
    </div>
    <div className="navbar">
        <NavLink className="link" to="/home">Home</NavLink>
        <NavLink className="link" to="/product">Product</NavLink>
        <NavLink className="link" to="/about">about</NavLink>
        <NavLink className="link" to="/">Login</NavLink>
        <NavLink className="link" to="/sign">Sign Up</NavLink>
    </div>
      </nav>

  )
}

export default Navbar
