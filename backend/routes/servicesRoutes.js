const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/add', serviceController.ajouterService);
router.put('/:service',serviceController.mettreAJourService);
router.delete('/delete/:serviceId', serviceController.supprimerService);
router.get('/categories', serviceController.lireServices);

module.exports = router;
