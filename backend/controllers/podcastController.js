const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const Podcast = require('../models/podcastModel');
const User = require('../models/userModel');

// @desc  Get All podcasts
// @route GET /api/v1/podcasts
// @access Public
const getPodcasts = asyncHandler(async (req, res) => {
    const podcasts = await Podcast.find();
    res.status(200).json(podcasts);
});

// @desc  Get One podcast
// @route GET /api/v1/podcasts/:id
// @access Public
const getPodcast = asyncHandler(async (req, res) => {
    const podcast = await Podcast.findById(req.params.id);
    if(!podcast){
      res.status(404);
      throw new Error('Podcast not found');
    }
    res.status(200).json(podcast);
});

// @desc  Create a podcasts
// @route POST /api/v1/podcasts
// @access Private
const createPodcast = asyncHandler(async (req, res) => {
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

    const {title, link} = req.body;

    if(!title || !link){
        res.status(400);
        throw new Error('Please add title, and link');
    }
    
    const newPodcast = await Podcast.create({
        title,
        link,
    });
    
      res.status(201).json(newPodcast);
});

// @desc  Delete a podcast
// @route DELETE /api/v1/podcasts/:id
// @access Private
const deletePodcast = asyncHandler(async (req, res) => {
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

    const podcast = await Podcast.findById(req.params.id);
    if(!podcast){
        res.status(404);
        throw new Error('Podcast not found');
    }

    await podcast.remove();

    res.status(200).json({success: true});
})

module.exports = {
    getPodcasts,
    getPodcast,
    createPodcast,
    deletePodcast
}