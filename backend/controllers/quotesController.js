const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const Quote = require('../models/quotesModel');
const User = require('../models/userModel');

// @desc  Get All Quotes
// @route GET /api/v1/quotes
// @access Public
const getQuotes = asyncHandler(async (req, res) => {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
});

// @desc  Get One Quote
// @route GET /api/v1/quotes/:id
// @access Public
const getQuote = asyncHandler(async (req, res) => {
    const quote = await Quote.findById(req.params.id);
    if(!quote){
      res.status(404);
      throw new Error('Quote not found');
    }
    res.status(200).json(quote);
});

// @desc  Create a Quote
// @route POST /api/v1/quotes
// @access Private
const createQuote = asyncHandler(async (req, res) => {
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

    const {text, author, place, show} = req.body;

    if(!text || !author || !place){
        res.status(400);
        throw new Error('Please add text, author, and place');
    }
    
    const newQuote = await Quote.create({
        text,
        author,
        place,
        show
    });
    
      res.status(201).json(newQuote);
});

// @desc  Delete a quote
// @route DELETE /api/v1/quotes/:id
// @access Private
const deleteQuote = asyncHandler(async (req, res) => {
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

    const quote = await Quote.findById(req.params.id);
    if(!quote){
        res.status(404);
        throw new Error('Quote not found');
    }

    await quote.remove();

    res.status(200).json({success: true});
})

module.exports = {
    getQuotes,
    getQuote,
    createQuote,
    deleteQuote
}