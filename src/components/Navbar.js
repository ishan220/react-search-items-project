import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (<nav className="nav-container">
    <div className="logo" >
      <img src={logo} alt="logo"/>
    </div>
    <div className="nav-links">
     <Link to="/">
       Home
     </Link>
     <Link to="/about">
     About
     </Link>
    </div>
    </nav>
  );
};

export default Navbar
