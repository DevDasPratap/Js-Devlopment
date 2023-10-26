const router = require('express').Router()
const auth_router = require('./auth.router')
router.use('/api/v1/auth', auth_router)
module.exports = router