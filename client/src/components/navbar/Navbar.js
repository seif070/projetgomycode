
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ auth, logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          Your Logo
        </Link>
        <div className="navbar-links">
          <Link to="/home" className="navbar-link">
            Home
          </Link>
          {auth.role === 'admin' && (
            <Link to="/admin" className="navbar-link">
              Admin
            </Link>
          )}
          {auth.role === 'user' && (
            <Link to="/user" className="navbar-link">
              User
            </Link>
          )}
          <button onClick={handleLogout} className="navbar-link">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
