const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');


const User = require('../models/userModel');

// @desc Register a new user
// @route /api/v1/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password, isAdmin} = req.body;

  // Validation
  if(!name || !email || !password){
    res.status(400);
    throw new Error('Please include all fields');
  }

  // Find if user already exist
  const userExists = await User.findOne({email})

  if(userExists){
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashPassword,
    isAdmin
  });

  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  }else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Login a user
// @route /api/v1/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
})

module.exports = {
  registerUser,
  loginUser
}