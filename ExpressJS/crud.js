require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const app = express()

connectDB()

app.get('/', (req, res)=>{
    res.send('Home')
})

module.exports = app