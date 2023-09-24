const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxLength: [18, 'Name must be less then 18 char']
    },
    email: {
        type: String,
        required: [true, 'Password is required'],
        unique: true
    }
})

module.exports = mongoose.model('User', userSchema)