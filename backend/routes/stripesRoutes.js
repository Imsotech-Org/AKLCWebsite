const express = require('express');
const router = express.Router();
const {createStripe} = require('../controllers/stripesController');

router.post('/create-checkout-session', createStripe);

module.exports = router;