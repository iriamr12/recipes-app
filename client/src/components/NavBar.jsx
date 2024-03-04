import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css'

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    
    <nav className="navbar">
    <div className="menu-icon" onClick={handleClick}>
      <i className={click ? "fas fa-times" : "fas fa-bars"} />
    </div>
    <div className='links'>
      <ul className={click ? "nav-menu active" : "nav-menu"}>

        <Link className="nav-link" to="/" onClick={closeMobileMenu}>
          Home
        </Link>

        <Link className="nav-link" to="/profile" onClick={closeMobileMenu}>
          Profile
        </Link>

    </ul>
    </div>
    
  </nav>
  )};
export default NavBar