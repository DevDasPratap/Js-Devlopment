require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()

// middleware
app.use(express.json()) // json data allow
app.use(express.urlencoded({ extended: true })) //get req data encode and decode via url
app.use(cors()) //cross port/url
// connect db
connectDB()


// app.get('/', (req, res)=>{
//     res.send('Home')
// })
/* or */
const userRouter = require('./routes/userRoute')
app.use('/', userRouter) //req,res callback method call from controllers

module.exports = app