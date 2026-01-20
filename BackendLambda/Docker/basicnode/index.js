const express = require('express')
const app = express()

app.get('/home', (req, res)=>{
    res.json({message: 'Ok'})
})

app.listen(4000, ()=>{
    console.log('Started the server')
})
