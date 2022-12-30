const mongoose = require('mongoose');

const youtubeVideosSchema = mongoose.Schema({
    thumbnail: {
        type: String,
        required: [true, 'Please add a name to thumbnail'],
    },
    title: {
        type: String,
        require: [true, "Please add title to your youtube video"]
    },
    description: {
        type: String,
        require: [true, "Please add description to your youtube video"]
    },
    show: {
        type: Boolean,
        require: true,
        default: false
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('YoutubeVideo', youtubeVideosSchema);