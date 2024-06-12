const express = require('express')
const { createPost } = require('../controllers/post')
const passport = require('passport')
const postRoute = express.Router()

postRoute.post('/create', passport.authenticate('jwt', {session: false}), createPost)
module.exports = postRoute