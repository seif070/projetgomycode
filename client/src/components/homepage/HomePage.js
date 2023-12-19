import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchaccount } from '../../api/authapi';
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../../store/accountSlice';
import { useNavigate } from 'react-router';
import User from '../user/User';
import Login from '../login/Login';
import Navbar from '../navbar/Navbar';
import Admin from '../Admin/AdminUser';
import './HomePage.css';

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
    <div className="homepage-container">
      {loading ? (
        <p>Loading...</p>
      ) : token ? (
        <>
          <Navbar auth={auth} logout={logout} />
          {auth.role === 'admin' ? <Admin auth={auth} /> : <User auth={auth} />}
        </>
      ) : (
        <Login />
      )}

      <section className="section-welcome">
        <h2>Lavage Auto à la Vapeur</h2>
        <p>
          Offrez à votre voiture le traitement qu'elle mérite avec notre service de lavage auto à la vapeur.
          Respectueux de l'environnement, efficace et sans produits chimiques agressifs.
        </p>
      </section>

      <section className="section-how-it-works">
        <h2>Comment Ça Marche</h2>
        <p>
          Notre équipe qualifiée utilise la puissance de la vapeur pour nettoyer votre voiture de manière
          approfondie, en éliminant la saleté, les taches et les bactéries.
        </p>
      </section>

      <section className="section-advantages">
        <h2>Avantages du Lavage à la Vapeur</h2>
        <ul>
          <li>Écologique</li>
          <li>Économique en eau</li>
          <li>Nettoyage en profondeur</li>
          <li>Protection de la peinture</li>
        </ul>
      </section>

      <section className="section-book-now">
        <h2>Réservez un Lavage</h2>
        <p>
          Prêt à donner à votre voiture un nouveau look?{' '}
          <Link to='/reservation'>Réservez maintenant</Link> et profitez de notre service
          de lavage auto à la vapeur.
        </p>
      </section>

      <section className="contact-info">
        <p>Phone: 27363449</p>
        <p>Address: Munich</p>
      </section>
    </div>
  );
};

export default HomePage;
