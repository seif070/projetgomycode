import React, { useEffect, useState } from 'react';
import { fetchaccount } from '../../api/authapi';
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../../store/accountSlice';
import { useNavigate } from 'react-router';
import Admin from '../admin/Admin';
import User from '../user/User';
import Login from '../login/Login';
import Navbar from '../navbar/Navbar';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAccount = async () => {
    try {
      const data = await fetchaccount();
      dispatch(setAccount(data));
    } catch (error) {
      console.error('Error fetching account data:', error);
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const token = localStorage.getItem('token');

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : token ? (
        <>
          <Navbar auth={auth} logout={logout} />
          {auth.role === 'admin' ? <Admin auth={auth}    /> : <User   auth={auth} />}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default HomePage;
