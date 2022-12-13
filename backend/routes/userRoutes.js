const express = require('express');
const router = express.Router();
const multer = require('multer');
const {registerUser, loginUser, getMe} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/signIn', loginUser);
router.get('/me', protect, getMe);

module.exports = router;