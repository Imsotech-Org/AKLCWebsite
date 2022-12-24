const mongoose = require('mongoose');

const systemImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name to image'],
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

module.exports = mongoose.model('SystemImage', systemImageSchema);