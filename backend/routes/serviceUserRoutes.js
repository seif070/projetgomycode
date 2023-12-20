
const express = require('express');
const router = express.Router();
const serviceUserController = require('../controllers/serviceUserController'); 
router.get('/services', serviceUserController.getAllServices);

router.put('/services/:id', serviceUserController.updateServiceUserName);

module.exports = router;
