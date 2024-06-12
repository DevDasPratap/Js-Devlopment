const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default: ""
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('post', postSchema)