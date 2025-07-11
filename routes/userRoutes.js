const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/', userController.createUser);

// Get user by ID
router.get('/:id', userController.getUser);

// Claim a deal
router.post('/claim/:userId/:dealId', userController.claimDeal);

module.exports = router;
