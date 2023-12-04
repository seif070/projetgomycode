const express = require('express');
const router = express.Router();
const partenaireController = require('../controllers/partenaireController');
const avisController = require('../controllers/avisController');

router.post('/partenaire/service/ajouter',partenaireController.ajouterService);
router.get('/partenaire/service/lire', partenaireController.lireServices);
router.put('/partenaire/service/mettreAJour/:serviceId', partenaireController.mettreAJourService);
router.delete('/partenaire/service/supprimer/:serviceId', partenaireController.supprimerService);

router.post('/avis/ajouter', avisController.ajouterAvis);

module.exports = router;
