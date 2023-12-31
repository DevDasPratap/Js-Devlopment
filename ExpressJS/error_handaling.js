const express = require('express')

const app = express()

app.get('/', function(req, res, next){
    // res.send('calling')
    const err = new Error('Somthing went wrong')
    next(err)
})

app.get('*', function(req, res, next){
    res.status(404)
    const err = new Error('Somthing went wrong')
    next(err)
    // res.send('url are not found')
})

app.use(function(err, req, res, next){
    res.status(500)
    res.send('Oop somthing went wrong')
})

app.listen(3000)