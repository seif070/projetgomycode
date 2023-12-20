import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Wasche mich
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Accueil
          </Link>
          <Link to="/reservation" className="navbar-link">
            Réservez
          </Link>
          <Link to="/services" className="navbar-link">
            Services
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
