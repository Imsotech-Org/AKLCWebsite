const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name to register'],
    },
    email: {
        type: String,
        required: [true, 'Please add a email to register'],
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Register', registerSchema);