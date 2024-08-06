const sendOTP = require('../controllers/user')

const userRoute = require('express').Router()
userRoute.post('/send-otp', sendOTP)
module.exports = userRoute
