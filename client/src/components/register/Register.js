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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form className="form_main">
        <p className="heading">Register</p>

        <div className="inputContainer">
          <svg
            viewBox="0 0 16 16"
            fill="#2e2e2e"
            height={16}
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            className="inputIcon"
          >
          </svg>
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
          <svg
            viewBox="0 0 16 16"
            fill="#2e2e2e"
            height={16}
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            className="inputIcon"
          >
          </svg>
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
          <svg
            viewBox="0 0 16 16"
            fill="#2e2e2e"
            height={16}
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            className="inputIcon"
          >
          </svg>
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
          <svg
            viewBox="0 0 16 16"
            fill="#2e2e2e"
            height={16}
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            className="inputIcon"
          >
          </svg>
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

        <button id="button" type="button" onClick={handleRegister}>
          Submit
        </button>

        <div className="signupContainer">
          <p>Don't have an account?</p>
          <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
