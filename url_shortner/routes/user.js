const express = require('express')
const { user_signup, user_login } = require('../controllers/user')

const router = express.Router()

router.post('/', user_signup)
router.post('/login', user_login)

module.exports = router