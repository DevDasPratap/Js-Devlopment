import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minLength: 4,
        maxLength: 50
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'User email is required'],
        trim: true,
        lowercase: true, // Fixed typo
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'] // Fixed regex
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minLength: 7
    }
}, { timestamps: true }); // Fixed options placement

// Create and export the model
const User = mongoose.model("User", userSchema);

export default User;