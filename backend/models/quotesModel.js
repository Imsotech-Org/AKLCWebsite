const mongoose = require('mongoose');

const quotesSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text to quote'],
    },
    author: {
        type: String,
        required: [true, 'Please add a name to author'],
    },
    place: {
        type: String,
        require: [true, 'Please add the place on the website of the image'],
        enum: ['Home', 'About', 'Programs', 'Blog', 'Videos', 'Podcast']
    },
    show: {
        type: Boolean,
        require: true,
        default: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Quote', quotesSchema);