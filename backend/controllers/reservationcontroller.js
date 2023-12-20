
const Reservation = require('../model/Reservation');

const createReservation = async (req, res) => {
  try {
    const { nom, email, telephone, typeService } = req.body;

    const reservation = await Reservation.create({
      nom,
      email,
      telephone,
      typeService,
    });

    res.status(201).json({ message: 'Réservation créée avec succès', reservation });
  } catch (error) {
    console.error('Erreur lors de la création de la réservation :', error);
    res.status(500).json({ message: 'Erreur lors de la création de la réservation' });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    console.error('Erreur lors de la récupération des réservations :', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};


module.exports = {
  createReservation,
  getAllReservations,
};
