
import React from 'react';
import './Admin.css'; 

const Admin = ({ auth }) => {
  return (
    <div className="adminContainer">
      <h2 className="adminHeading">Admin Dashboard</h2>
      <p className="adminInfo">Name: {auth.name}</p>
      <p className="adminInfo">Email: {auth.email}</p>
    </div>
  );
};

export default Admin;
