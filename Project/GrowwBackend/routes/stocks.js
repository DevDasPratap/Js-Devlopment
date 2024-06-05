const express = require('express')
const stocksRouter = express.Router()

stocksRouter.get('/', (req, res)=>{
    req.setEncoding('stocks')
})

module.exports = stocksRouter