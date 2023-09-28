import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

// create userSchema instance
const userSchema = new Schema({
    /* Validation 3 type=>
    1. Frontend body in html field
    2. Controller validation
    3. Schema(model) validation 
    */
    fullName: {
        type: 'String',
        required: [true, 'Name is required'],
        minLength: [5, 'Name must be at least 5 chartcher'],
        maxLength: [50, 'Name must be less then 50 chartcher'],
        lowercase: true,
        trim: true
    },
    email: {
        type: 'String',
        lowercase: true,
        trim: true,
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },
    password: {
        type: 'String',
        required: [true, 'Password is required'],
        minLength: [8, 'Password must be at leset 8 char'],
        select: false // when user get query password don't give by default
    },
    avatar: {
        public_id: {
            type: 'String',
        },
        secure_url: {
            type: 'String',
        },
    },
    role: {
        type: 'String',
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
}, {
    timestamps: true //create, update time stamps
})

// Hashes password before saving to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// generic method
userSchema.method = {
    // method which will help us compare plain password with hashed password and returns true or false
    generateJWTToken: async function () {
        return  await jwt.sign(
            {
                id: this.public_id, email: this.email, subcription: this.subcription, role: this.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        )
    },
    comparePassword: async function(plainTextPassword){
        return await bcrypt.compare(plainTextPassword, this.password)
    }
}

const User = model('User', userSchema)

export default User