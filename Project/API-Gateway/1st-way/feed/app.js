const express = require('express')
const app = express()

const PORT = 3004

app.get('/', (req, res)=>{
    res.send('Hello from feed service')
})

app.listen(PORT, ()=>{
    console.log(`Feed server running on PORT ${PORT}`)
})