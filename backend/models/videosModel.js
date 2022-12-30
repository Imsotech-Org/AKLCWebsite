const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add name to your video"]
    },
    videoImage: {
        type: String,
        require: [true, "Please add name to your video"]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Video', videoSchema);