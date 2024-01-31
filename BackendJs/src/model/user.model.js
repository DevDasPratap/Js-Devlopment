import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: false,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// custom hoock - store encrypt password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // not modifyed return
  this.password = await bcrypt.hash(this.password, 10); //all time hash password
  next();
});

// custom method - check and compare db and input passord
userSchema.methods.isPasswordCorrect = async function (password){
  return await bcrypt.compare(password, this.password)
}

// short duration
userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRECT,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
// long duration
userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRECT,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User = model("User", userSchema);
