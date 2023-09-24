const mongoose = require('mongoose')
const { Schema } = mongoose
const JWT = require('jsonwebtoken')
const authSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        minLength: [5, 'Name mube be at least 5 char'],
        maxLength: [10, 'Name mube be at least 10 char'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'User emial is required'],
        unique:true,
        lowercase: true,
        unique: [true, 'Already registered']
    },
    password: {
        type: String,
        select: false
    },
    forgotPasswordToken: {
        type: String
    },
    gotPasswordExpiryDate: {
        type: Date
    }
}, {
    timestamps: true
})

// Create custom validator/methods
// JWT=> 3 part(data.secrect.expire)
authSchema.methods = {
    jwtToken() {
        return JWT.sign(
            { id: this._id, email: this.email }, //data
            process.env.SECRET, // Secrect token store
            { expiresIn: '24h' } //Expired
        )
    }
}

const authModel = mongoose.model('auth', authSchema)
module.exports = authModel