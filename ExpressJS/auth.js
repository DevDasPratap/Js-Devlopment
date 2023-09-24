require('dotenv').config()
const express = require('express')
const authRoute = require('./routes/authRoute')
const connectDB = require('./config/authDB')
const app = express()

connectDB()

// middleware
app.use(express.json()) // json data allow/ parser json data

app.use('/api/auth/', authRoute)
app.use('/', (req, res)=>{
    res.status(200).json({data: 'JWT Auth Server'})
})

module.exports = app