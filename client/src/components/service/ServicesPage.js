import React from 'react';
import Navbar from '../navbar/Navbar';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-container">
      <Navbar />

      <div className="services-content">
        <h2>Nos Services</h2>
        <p>
          Découvrez nos différents services de lavage auto à la vapeur. Choisissez celui qui convient le mieux
          à vos besoins.
        </p>

        <div className="service-card">
          <h3>Nettoyage Standard</h3>
          <p>
            Un nettoyage complet qui élimine la saleté, les taches et les bactéries. Respectueux de
            l'environnement et sans produits chimiques agressifs.
          </p>
        </div>

        <div className="service-card">
          <h3>Lustrage Premium</h3>
          <p>
            Offrez à votre voiture une finition haut de gamme avec notre service de lustrage premium.
            Protégez la peinture et redonnez de l'éclat à votre véhicule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
