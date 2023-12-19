import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Wasche mich
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reservation" className="nav-link">
            Réservation
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
