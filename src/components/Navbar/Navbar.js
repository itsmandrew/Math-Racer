// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MathRacer</div>
        <div className="navbar-menu">
          <button className="navbar-menu-button">Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;