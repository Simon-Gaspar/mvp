import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';

function Navbar() {
  return (
    <>
      <div className="top-banner">
        <div className="nav-button" id="logo">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="nav-button" id="home-button">
          Home
        </div>
        <div className="nav-button" id="about-button">
          About
        </div>
      </div>
    </>
  );
}

export default Navbar;
