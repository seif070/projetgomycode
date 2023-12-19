import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import './ReservationPage.css';

const ReservationPage = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [typeService, setTypeService] = useState('');
  const [validation, setValidation] = useState({
    nom: true,
    email: true,
    telephone: true,
    typeService: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      try {
        await axios.post('http://localhost:5002/api/reservations', { nom, email, telephone, typeService });

        console.log('Réservation réussie !');
      } catch (error) {
        console.error('Erreur lors de la réservation :', error);
      }
    } else {
      console.log('Le formulaire n\'est pas valide.');
    }
  };

  const isFormValid = () => {

    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;

    switch (name) {
      case 'email':
        isValid = /\S+@\S+\.\S+/.test(value);
        break;
      case 'telephone':
        isValid = /^\d{10}$/.test(value);
        break;
      case 'nom':
      case 'typeService':
        isValid = value.trim() !== '';
        break;
      default:
        break;
    }

    setValidation((prevValidation) => ({
      ...prevValidation,
      [name]: isValid,
    }));

    switch (name) {
      case 'nom':
        setNom(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      case 'typeService':
        setTypeService(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="reservation-container">
      <Navbar />
      <h2>Réservez un Lavage Auto</h2>
      <form className="form-container" onSubmit={handleSubmit}>
      </form>
    </div>
  );
};

export default ReservationPage;
