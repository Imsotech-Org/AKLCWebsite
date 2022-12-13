const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please enter the name of the plan']
  },
  price: {
    type: Number,
    require: [true, 'Please enter the price of the plan']
  },
  planImage: {
    data: Buffer,
    contentType: String,
    require: [true, 'Please enter the image of the plan']
  }
});

module.exports = mongoose.model('Plan', planSchema);