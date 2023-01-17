const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const Subscriber = require('../models/subscribers');
const User = require('../models/userModel');

// @desc  Get All subscribers
// @route GET /api/v1/subscribers
// @access Public
const getSubscribers = asyncHandler(async (req, res) => {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
});

// @desc  Delete a subscriber
// @route PUT /api/v1/subscribers/:listId/:subId
// @access Private
const deleteSubscriber = asyncHandler(async (req, res) => {
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

    const subscribers = await Subscriber.findById(req.params.listId);

    subscribers.subscribers.map(async (item, index) => {
        if(item._id.toString() === req.params.subId){
            const deletedSubscribers = await Subscriber.findOneAndUpdate({
                _id: req.params.listId
            }, {
                $pull: {
                    subscribers: item,
                },
            })
        }
    })

    res.status(200).json({message: 'done'});
})


// @desc  Add a subscriber
// @route PUT /api/v1/subscribers
// @access Public
const createSubscribers = asyncHandler(async (req, res) => {
    const {name, email} = req.body;

    const subscribers = await Subscriber.findOneAndUpdate({
        _id: "63b37ff22983296c8eced198",
    }, {
        $addToSet: {
            subscribers: {
                name,
                email
            },
        },
    })
    
    res.status(201).json(subscribers);
});

module.exports = {
    getSubscribers,
    createSubscribers,
    deleteSubscriber
}