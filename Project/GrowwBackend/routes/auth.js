const express = require('express')
const authRouter = express.Router()

authRouter.get('/', (req, res)=>{
    req.setEncoding('auth')
})

module.exports = authRouter