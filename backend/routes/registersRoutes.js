const express = require('express');
const router = express.Router();
const {getRegisters, createRegisters, deleteRegisters} = require('../controllers/registersControllers');
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(getRegisters).post(createRegisters);
router.route('/:id').delete(protect, deleteRegisters);

module.exports = router;