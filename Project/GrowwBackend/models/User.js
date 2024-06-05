const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
      maxlength: 50,
      minlength: 3,
    },
    login_pin: {
      type: String,
    },
    phone_number: {
      type: String,
      match: [
        /^[0-9]{10}$/,
        "Please provide a 10-digit phone number without spaces or special characters",
      ],
      unique: true,
      sparse: true, 
    },
    date_of_birth: Date,
    biometricKey: String,
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    wrong_pin_attempts: {
      type: Number,
      default: 0,
    },
    blocked_until_pin: {
      type: Date,
      default: null,
    },
    wrong_password_attempts: {
      type: Number,
      default: 0,
    },
    blocked_until_password: {
      type: Date,
      default: null,
    },
    balance: {
      type: Number,
      default: 50000.0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;