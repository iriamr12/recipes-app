import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaHouse } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-button" to="/">
      <FaHouse />
      </Link>
      <Link className="nav-button" to="/profile">
      <FaUserAlt />
      </Link>
    </nav>
  );
};

export default NavBar;
