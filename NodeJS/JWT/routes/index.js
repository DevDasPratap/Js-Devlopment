const router = require('express').Router()
const authenticate = require('../middleware/jwt.middleware')
const auth_router = require('./auth.router')
const user_routes = require('./users.routes')
router.use('/api/v1/auth', auth_router)
router.use('/api/v1/users', authenticate, user_routes)

module.exports = router