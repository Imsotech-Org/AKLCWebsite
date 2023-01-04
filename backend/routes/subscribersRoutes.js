const express = require('express');
const router = express.Router();
const {getSubscribers, createSubscribers, deleteSubscriber} = require('../controllers/subscribersController');
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(getSubscribers).put(protect, createSubscribers);
router.route('/:listId/:subId').put(protect, deleteSubscriber);

module.exports = router;