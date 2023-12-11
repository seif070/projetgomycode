
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import './App.css';
import HomePage from './components/homepage/HomePage';
import User from './components/user/User';
import Admin from './components/admin/Admin';
import TableUser from './components/admin/TableUser/TableUser';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
        <Route path="/tableau_user" element={<TableUser/>}/>      </Routes>
    </div>
  );
}

export default App;
