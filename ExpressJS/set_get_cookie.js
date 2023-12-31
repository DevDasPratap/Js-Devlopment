const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.get('/', function (req, res) {
    // set cookie
    res.cookie('name', 'Cookie Das', {maxAge: 10000})
    res.send('Cookie set')
})
app.get('/clear', function(req, res){
    res.clearCookie()
    res.send('Clear cookie')
})
app.listen(3000)