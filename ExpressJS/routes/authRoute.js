const express = require('express')
const { signUp, signIn, getUser, logout } = require('../controllers/authController')
const jwtAuth = require('../middleware/jwtAuth')
const authRoute = express.Router()

authRoute.post('/signup', signUp)
authRoute.post('/signin', signIn)
authRoute.get('/user', jwtAuth, getUser)
authRoute.get('/logout', jwtAuth, logout)

module.exports = authRoute