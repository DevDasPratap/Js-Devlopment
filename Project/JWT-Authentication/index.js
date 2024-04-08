require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user.route')

const app = express()

// db connect
mongoose.connect('mongodb://localhost:27017/jwt-auth')
.then(()=>{
    console.log(`DB connect`)
})
.catch((err)=>{
    console.log(err)
})

app.use('/api', userRouter)


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
})