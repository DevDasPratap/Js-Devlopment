require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const userRoute = require('./routes/user.route')

const app = express()

mongoose.connect('mongodb://localhost:27017/restful-auth-api')

const PORT = process.env.PORT || 3000

// routes
app.use('/api', userRoute)

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})