const express = require('express')
const app = express()

const PORT = 3001

app.get('/', (req, res)=>{
    res.send('Hello from chat service')
})
app.get('/me', (req, res)=>{
    res.send('Hello from my chat service')
})
app.listen(PORT, ()=>{
    console.log(`Chat server running on PORT ${PORT}`)
})