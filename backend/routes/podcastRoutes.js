const express = require('express');
const router = express.Router();
const {getPodcasts, getPodcast, createPodcast, deletePodcast} = require('../controllers/podcastController');
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(getPodcasts).post(protect, createPodcast);
router.route('/:id').get(getPodcast).delete(protect, deletePodcast);

module.exports = router;