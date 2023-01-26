const express = require('express');
const router = express.Router();
const {createStripe, createStripeSubscription} = require('../controllers/stripesController');

router.post('/create-checkout-session', createStripe);
router.post('/subscriptions', createStripeSubscription)

module.exports = router;