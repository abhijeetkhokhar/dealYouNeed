const express = require('express');
const router = express.Router();
const dealController = require('../controllers/dealController');

// Create a new deal
router.post('/', dealController.createDeal);

// Get all deals
router.get('/', dealController.getAllDeals);

module.exports = router;
