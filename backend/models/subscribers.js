const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add name to subscriber"]
    },
    email: {
        type: String,
        require: [true, "Please add email to subscriber"]
    }
},
{
    timestamps: true
});

const subscribersListSchema = mongoose.Schema({
    subscribers: [subscriberSchema]
},
{
    timestamps: true
});

module.exports = mongoose.model('SubscriberList', subscribersListSchema);