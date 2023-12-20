
const express = require('express');
const router = express.Router();
const Reservation = require('../model/Reservation');

router.post('/', async (req, res) => {
  try {
    const { nom, email, telephone, typeService } = req.body;


    const newReservation = new Reservation({
      nom,
      email,
      telephone,
      typeService,
    });

    const savedReservation = await newReservation.save();
    res.json(savedReservation);
  } catch (error) {
    console.error('Erreur lors de la création de la réservation :', error);
    res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
  }
});

module.exports = router;
