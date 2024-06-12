const express = require('express')
const {userRegister, userLogin, userProfile} = require('../controllers/user')
const passport = require('passport')
const userRoute = express.Router()

userRoute.post('/signup', userRegister)
userRoute.post('/login', userLogin)
userRoute.get('/profile/:id', passport.authenticate('jwt', {session: false}), userProfile)

module.exports = userRoute