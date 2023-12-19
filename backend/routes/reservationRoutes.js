const express = require('express');
const router = express.Router();

router.post('/reservations', async (req, res) => {
  try {
    const { nom, email, telephone, typeService } = req.body;


    res.status(201).json({ message: 'Réservation créée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création de la réservation :', error);
    res.status(500).json({ message: 'Erreur lors de la création de la réservation' });
  }
});

module.exports = router;
