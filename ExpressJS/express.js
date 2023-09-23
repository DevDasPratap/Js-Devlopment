const express = require('express')
// console.log(express)
const app = express() //istance for express app
// console.log(app)

const port = 4444
const hostname = 'localhost'

app.get('/', (req, res)=>{
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('About')
})
app.get('/contact', (req, res)=>{
    res.send('Contact')
})
app.get('*', (req, res)=>{
    res.send('Page not found')
})

app.listen(port, ()=>{
    console.log(`Server running at ${hostname}: ${port}`)
})