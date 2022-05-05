import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';

function Navbar() {
  return (
    <div className="top-banner">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

export default Navbar;
