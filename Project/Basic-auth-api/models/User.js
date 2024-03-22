const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email address"],
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: "Please provide a valid email address"
        }
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
