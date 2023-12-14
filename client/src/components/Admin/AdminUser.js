import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard'; 

const AdminUser = ({ auth }) => {
  return (
    <div className="admin-container">
      <h2>Welcome, Admin {auth.name}!</h2>
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to='/admin/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/admin/users'>Manage Users</Link>
          </li>
          <li>
            <Link to='/admin/products'>Manage Products</Link>
          </li>
        </ul>
      </nav>
      <div className="admin-content">
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        </Routes>
      </div>
    </div>
  );
};

export default AdminUser;
