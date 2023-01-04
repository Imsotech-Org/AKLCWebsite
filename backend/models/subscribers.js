const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema({
    name: {
        type: String,
        require: [false]
    },
    email: {
        type: String,
        require: [false]
    }
});

const subscribersListSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "add name to list"]
    },
    subscribers: [subscriberSchema]
},
{
    timestamps: true
});

module.exports = mongoose.model('SubscriberList', subscribersListSchema);