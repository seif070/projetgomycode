import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitLogin = async (values) => {
    try {
      const res = await axios.post('http://localhost:5002/auth/login', values);
      console.log('Réponse du login :', res.data.token);
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (error) {
      console.error('Erreur lors de la demande :', error.message);
      if (error.response) {
        console.error('Réponse du serveur avec erreur :', error.response.data);
        console.error('Statut de la réponse :', error.response.status);
      } else if (error.request) {
        console.error('Aucune réponse reçue du serveur');
      } else {
        console.error('Erreur lors de la configuration de la requête :', error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <p className="login-heading">Login</p>
   
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
        </div>

        <button id="login-button" type="button" onClick={() => submitLogin({ email, password })}>
          Submit
        </button>

        <div className="signupContainer">
          <p>Don't have any account?</p>
          <a href="/" className="signup-link">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
