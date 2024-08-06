require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/login_otp_db')
const express = require('express')
const userRoute = require('./routes/user')
const app = express()
const port = 5001

app.use(express.json())
app.use('/api', userRoute)


app.listen(port, (req, res)=>{
    console.log(`Server Running ata port ${port}`)
})