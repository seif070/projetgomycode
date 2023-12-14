const express = require('express');
const router = express.Router();
const { getAdminStatistics } = require('../controllers/adminController');

router.get('/statistics', getAdminStatistics);

module.exports = router;
