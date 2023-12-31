const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({secret:'pd_secrect'}))

app.get('/', function (req, res) {
    // session set
    req.session.username = 'Pratap session'
    res.send('Session are set')
})
app.get('/get-session', function(req, res){
    res.send(`your session: ${req.session.username}`)
})

app.get('/session-count', function(req, res){
    if (req.session.user_visit) {
        req.session.user_visit++
        res.send(`your visited this page: ${req.session.user_visit} time`)
    }else{
        req.session.user_visit = 1
        res.send(`You are visit this page first time`)
    }
} )
app.listen(3000)