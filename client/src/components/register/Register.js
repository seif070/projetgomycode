import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/authapi';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = async () => {
    try {
      await registerUser({ name, lastname, email, password, phone, address });
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <p className="register-heading">Register</p>

        <div className="inputContainer">
          <input
            placeholder="name"
            id="name"
            className="inputField"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <input
            placeholder="lastname"
            id="lastname"
            className="inputField"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <input
            placeholder="email"
            id="email"
            className="inputField"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <input
            placeholder="Password"
            id="password"
            className="inputField"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="phone"
            id="phone"
            className="inputField"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder="adresse"
            id="adresse"
            className="inputField"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button id="register-button" type="button" onClick={handleRegister}>
          Submit
        </button>

        <div className="signupContainer">
          <p>Don't have an account?</p>
          <a href="/login" className="signup-link">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
