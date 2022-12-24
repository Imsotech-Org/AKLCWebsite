const express = require('express');
const router = express.Router();
const {getSystemImages, getSystemImage, createSystemImage, updateSystemImage, deleteSystemImage} = require('../controllers/systemImagesController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').get(protect, getSystemImages).post(protect, createSystemImage);
router.route('/:id').get(getSystemImage).delete(protect, deleteSystemImage);

module.exports = router;