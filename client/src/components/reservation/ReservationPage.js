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
    return Object.values(validation).every((isValid) => isValid);
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
        <div className="form-field">
          <label htmlFor="nom">Nom:</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={nom}
            onChange={handleInputChange}
            className={validation.nom ? 'valid-input' : 'invalid-input'}
            required
          />
          {!validation.nom && <p className="error-message">Le nom est requis.</p>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className={validation.email ? 'valid-input' : 'invalid-input'}
            required
          />
          {!validation.email && <p className="error-message">Entrez une adresse e-mail valide.</p>}
        </div>

        <div className="form-field">
          <label htmlFor="telephone">Téléphone:</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={telephone}
            onChange={handleInputChange}
            className={validation.telephone ? 'valid-input' : 'invalid-input'}
            required
          />
          {!validation.telephone && <p className="error-message">Entrez un numéro de téléphone valide.</p>}
        </div>

        <div className="form-field">
          <label htmlFor="typeService">Type de Service:</label>
          <select
            id="typeService"
            name="typeService"
            value={typeService}
            onChange={handleInputChange}
            className={validation.typeService ? 'valid-input' : 'invalid-input'}
            required
          >
            <option value="">Sélectionnez un service</option>
            <option value="nettoyage">Nettoyage Standard</option>
            <option value="lustrage">Lustrage Premium</option>
          </select>
          {!validation.typeService && <p className="error-message">Le type de service est requis.</p>}
        </div>

        <button type="submit" disabled={!isFormValid()} className="submit-button">
          Réserver
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;
