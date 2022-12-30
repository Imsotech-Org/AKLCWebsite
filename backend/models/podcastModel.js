const mongoose = require('mongoose');

const podcastSchema = mongoose.Schema({
    title: {
        type: String,
        require: [true, "Please add title to your podcast episode"]
    },
    link: {
        type: String,
        require: [true, "Please add link to your podcast episode"]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Podcast', podcastSchema);