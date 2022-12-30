const express = require('express');
const router = express.Router();
const {getQuotes, getQuote, createQuote, deleteQuote} = require('../controllers/quotesController');
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(getQuotes).post(protect, createQuote);
router.route('/:id').get(getQuote).delete(protect, deleteQuote);

module.exports = router;