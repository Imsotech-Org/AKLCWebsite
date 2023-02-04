const express = require('express');
const router = express.Router();
const {getSystemImages, getSystemImage, createSystemImage, updateSystemImage, deleteSystemImage, createSpecialSystemImage} = require('../controllers/systemImagesController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').get(getSystemImages).post(protect, createSystemImage);
router.route('/special').post(protect, createSpecialSystemImage);
router.route('/:id').get(getSystemImage).delete(protect, deleteSystemImage).put(protect, updateSystemImage);

module.exports = router;