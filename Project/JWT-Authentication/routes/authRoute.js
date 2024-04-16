const express = require('express')
const authRoute = express()
const { mailVerification } = require('../controllers/user.controller')

authRoute.use(express.json())

authRoute.get('/verify-mail', mailVerification)

module.exports = authRoute