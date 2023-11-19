const express = require('express')
const app = express()

// custom middleware
app.use(function(req, res, next) {
    console.log('Custom middleware 1')
    next()
})
app.use(function(req, res, next) {
    console.log('Custom middleware 2')
    next()
})
app.get('/', (req, res)=>{
    res.send('root')
})

app.listen(3000, console.log('Server running'))