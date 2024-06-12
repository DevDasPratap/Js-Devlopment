const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const passport = require('passport')
const passportConfig = require('./config/passport')
const postRoute = require('./routes/post')
const app = express()

const PORT = 3000

app.use(express.json())
app.use(passport.initialize())
passportConfig(passport)

mongoose.connect('mongodb://localhost:27017/passport')
.then(()=>{
    console.log('db connected')
})
.catch((err)=>{
    console.log(err.toString())
})

app.get('/', (req, res)=>{
    res.send('Hello world this node app')
})

// define route middleware
app.use('/api', userRoute)
app.use('/api', postRoute)

app.listen(PORT, ()=>{
    console.log(`REST api passport server runningon port: ${PORT}`)
})