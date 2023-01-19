const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const Register = require('../models/registersModel');
const User = require('../models/userModel');

// @desc  Get All Registers
// @route GET /api/v1/registers
// @access Public
const getRegisters = asyncHandler(async (req, res) => {
    const registers = await Register.find();
    res.status(200).json(registers);
});

// @desc  Create a Quote
// @route POST /api/v1/registers
// @access Public
const createRegisters = asyncHandler(async (req, res) => {
    const {name, email} = req.body;

    if(!name || !email){
        res.status(400);
        throw new Error('Please add name, and email');
    }
    
    const newRegister = await Register.create({
        name,
        email,
    });
    
      res.status(201).json(newRegister);
});

// @desc  Delete a register
// @route DELETE /api/v1/registers/:id
// @access Private
const deleteRegisters = asyncHandler(async (req, res) => {
    let token
    let user

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Get token from header
        token = req.headers.authorization.split(' ')[1];
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        user = await User.findById(decoded.id).select('-password');
    }

    if(!user.isAdmin) {
        res.status(401);
        throw new Error('User not authorized for function');
    }

    const register = await Register.findById(req.params.id);
    if(!register){
        res.status(404);
        throw new Error('Register not found');
    }

    await register.remove();

    res.status(200).json({success: true});
})

module.exports = {
    getRegisters,
    createRegisters,
    deleteRegisters
}