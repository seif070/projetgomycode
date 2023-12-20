import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import Login from './components/login/Login';
import './App.css';
import HomePage from './components/homepage/HomePage';
import User from './components/user/User';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminUser from './components/Admin/AdminUser';
import ReservationPage from './components/reservation/ReservationPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/user' element={<User />} />
        <Route path='/admin' element={<AdminUser />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/reservation' element={<ReservationPage />} />
      </Routes>
    </div>
  );
}

export default App;
