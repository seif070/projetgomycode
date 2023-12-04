
import React from 'react';
import './User.css'; 

const User = ({ auth }) => {
  return (
    <div className="userContainer">
      <h2 className="userHeading">Welcome, {auth.name}!</h2>
      <p className="userInfo">Email: {auth.email}</p>
      <p className="userInfo">Phone: {auth.phone}</p>
      <p className="userInfo">Address: {auth.address}</p>
    </div>
  );
};

export default User;
