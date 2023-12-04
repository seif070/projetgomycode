const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/allUsers', UserController.getAllUsers);

module.exports = router;
