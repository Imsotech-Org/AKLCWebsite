const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const SystemImage = require('../models/systemImagesModel');
const User = require('../models/userModel');


// @desc  Get All system Images
// @route GET /api/v1/systemImages
// @access Private
const getSystemImages = asyncHandler(async (req, res) => {
  const systemImages = await SystemImage.find();
  res.status(200).json(systemImages);
})

// @desc  Get one system Images
// @route GET /api/v1/systemImages/:id
// @access Private
const getSystemImage = asyncHandler(async (req, res) => {
  const systemImage = await SystemImage.findById(req.params.id);
  if(!systemImage){
    res.status(404);
    throw new Error('System Image not found');
  }
  res.status(200).json(systemImage);
})


// @desc  Create a system Images
// @route POST /api/v1/systemImages
// @access Private
const createSystemImage = asyncHandler(async (req, res) => {
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

  const {name, place, show} = req.body;

  if(!name || !place){
    res.status(400);
    throw new Error('Please add name, place, and show');
  }

  const systemImage = await SystemImage.create({
    name: 'systemImage_'+place+'_'+req.body.name,
    place, 
    show
  })

  res.status(201).json(systemImage);
})

// @desc  Update a system Images
// @route PUT /api/v1/systemImages/:id
// @access Private
const updateSystemImage = asyncHandler(async (req, res) => {
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

  const updatedSystemImage = await SystemImage.findByIdAndUpdate(req.params.id, req.body);
  if(!updatedSystemImage){
    res.status(404);
    throw new Error('System Image not found');
  }
  res.status(200).json(updatedSystemImage);

})


// @desc  Delete a system Images
// @route DELETE /api/v1/systemImages/:id
// @access Private
const deleteSystemImage = asyncHandler(async (req, res) => {
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

  const systemImage = await SystemImage.findById(req.params.id);
  if(!systemImage){
    res.status(404);
    throw new Error('System Image not found');
  }

  await systemImage.remove();

  res.status(200).json({success: true});
})


module.exports = {
  getSystemImages,
  getSystemImage,
  createSystemImage,
  updateSystemImage,
  deleteSystemImage
}