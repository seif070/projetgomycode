import React, { useState } from 'react';
import './ReservationPage.css';

const ReservationPage = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [typeService, setTypeService] = useState('');

  const handleSubmit = () => {
    console.log('Réservation soumise :', { nom, email, telephone, typeService });
  };

  return (
    <div>
      <h2>Réservez un Lavage Auto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom:</label>
        <input type='text' value={nom} onChange={(e) => setNom(e.target.value)} required />

        <label>Email:</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Téléphone:</label>
        <input type='tel' value={telephone} onChange={(e) => setTelephone(e.target.value)} required />

        <label>Type de Service:</label>
        <select value={typeService} onChange={(e) => setTypeService(e.target.value)} required>
          <option value='nettoyage'>Nettoyage Standard</option>
          <option value='lustrage'>Lustrage Premium</option>
        </select>

        <button type='submit'>Réserver</button>
      </form>
    </div>
  );
};

export default ReservationPage;
