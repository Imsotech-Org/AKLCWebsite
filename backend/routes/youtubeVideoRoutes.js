const express = require('express');
const router = express.Router();
const {getYoutubeVideos, createYoutubeVideo,} = require('../controllers/youtubeVideoController');

router.get('/', getYoutubeVideos);
router.post('/', createYoutubeVideo);

module.exports = router;