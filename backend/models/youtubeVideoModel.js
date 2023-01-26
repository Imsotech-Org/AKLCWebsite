const mongoose = require('mongoose');

const youtubeVideoSchema = mongoose.Schema({
    imageName: {
        type: String,
        require: [true, "Please add image to your youtubevideo"]
    },
    title: {
        type: String,
        require: [true, "Please add title to your youtubevideo"]
    },
    description: {
        type: String,
        require: [true, "Please add description to your youtubevideo"]
    },
    youtubevideoId: {
        type: String,
        require: [true, "Please add yooutubevideoid to your youtubevideo"],
        unique: true,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('YoutubeVideo', youtubeVideoSchema);