const express = require('express');
const router = express.Router();
const Reservation = require('../model/Reservation');

router.post('/reservations', async (req, res) => {
  try {
    const { nom, email, telephone, typeService } = req.body;

    const newReservation = await Reservation.create({
      nom,
      email,
      telephone,
      typeService,
      confirmed: false,
    });

    res.status(201).json({ message: 'Réservation créée avec succès', reservation: newReservation });
  } catch (error) {
    console.error('Erreur lors de la création de la réservation :', error);
    res.status(500).json({ message: 'Erreur lors de la création de la réservation' });
  }
});

router.put('/reservations/confirm/:id', async (req, res) => {
  try {
    const reservationId = req.params.id;
    const updatedReservation = await Reservation.findByIdAndUpdate(
      reservationId,
      { confirmed: true },
      { new: true }
    );

    res.json({ message: 'Réservation confirmée avec succès', reservation: updatedReservation });
  } catch (error) {
    console.error('Erreur lors de la confirmation de la réservation :', error);
    res.status(500).json({ message: 'Erreur lors de la confirmation de la réservation' });
  }
});

module.exports = router;
