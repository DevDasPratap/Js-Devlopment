require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectToDB = require('../config/connect')
const authRouter = require('../routes/auth')
const stocksRouter = require('../routes/stocks')

const app = express()


app.get('/', (req, res)=>{
    res.send('hello groww')
})

app.use('/auth', authRouter)
app.use('/auth', stocksRouter)

const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        await connectToDB(process.env.MONGO_URL)
        app.listen(port, ()=>{
            console.log(`Server is ruuning at port: ${port}`)
        })
    } catch (error) {
        console.log(error.toString())
    }
}
start()
// app.listen(port, ()=>{
//     console.log(`Server is ruuning at port: ${port}`)
// })