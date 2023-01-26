const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const YouTube = require('../models/youtubeVideoModel');

// @desc  Get All Registers
// @route GET /api/v1/youtubeVideos
// @access Public
const getYoutubeVideos = asyncHandler(async (req, res) => {
    const youtube = await YouTube.find();
    res.status(200).json(youtube);
});

// @desc  Create a Quote
// @route POST /api/v1/youtubeVideos
// @access Public
const createYoutubeVideo = asyncHandler(async (req, res) => {
    const {imageName, title, description, youtubevideoId} = req.body;

    if(!imageName || !title || !description || !youtubevideoId){
        res.status(400);
        throw new Error('Please add image, title, description, and youtubeVideoId');
    }
    
    const newYoutubeVideo = await YouTube.create({
        imageName,
        title,
        description, 
        youtubevideoId
    });
    
      res.status(201).json(newRegister);
});

module.exports = {
    getYoutubeVideos,
    createYoutubeVideo,
}