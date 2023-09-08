const express = require('express')
const http = require('http')

const app = express()

// console.log(typeof(express))
// console.log(typeof(app))

// route
// app.get('/', (req, res)=>{
//     res.send('Hello express')
// })
app.post('/form', (req, res) => {
    res.send(`Hi, This the post request`)
})
app.all('/hello', (req, res) => {
    res.send(`This url accept all type route`)
})

// Http method => get, post, put, delete
app.get('/me', (req, res) => {
    res.send(`This url get method only`)
})
app.post('/me', (req, res) => {
    res.send(`This url post method only`)
})
app.put('/me', (req, res) => {
    res.send(`This url put method only`)
})
app.delete('/me', (req, res) => {
    res.send(`This url delete method only`)
})

// URL building => http://localhost:4200/build:10 or http://localhost:4200/build=16 (accept only numeric number)
app.get('/build:id', (req, res) => {
    res.send(`URL building, ID is: ${req.params.id}`)
})
// http://localhost:4200/users/pratap/10 (accept only numeric number)
app.get('/users/:name/:id', (req, res) => {
    res.send(`Name: ${req.params.name}, ID: ${req.params.id}`)
})
// ([0-9] => only numeric, {4} length=> 4) //http://localhost:4200/1000
app.get('/:id([0-9]{4})', (req, res) => {
    res.send(` ID: ${req.params.id}`)
})
// ([a-z] => only alphabet, {5} length=> 5) //http://localhost:4200/abcde
app.get('/:id([a-z]{5})', (req, res) => {
    res.send(` ID: ${req.params.id}`)
})
// http://localhost:4200/ab11q (number and string in param)
app.get('/:p([a-z, 0-9]{5})', (req, res) => {
    res.send(` number and string: ${req.params.p}`)
})
// URL not found => Cannot GET /
// app.get('*', (req, res)=>{
//     res.send(`Url not found in node`)
// })

// Middleware
app.use((req, res, next) => {
    console.log(`Start middleware`)
    console.log(`New req recived: ${Date.now()}`)
    next()
})
app.get('/user', (req, res, next) => {
    res.send(`Got it`)
    next()
})
app.get('/user', (req, res, next) => {
    console.log(`End middleware`)
})

// Thirdparty middleware => body-parser, cookie-parser, express-session
const bodyParser = require('body-parser') // work => req method encoded
app.use(bodyParser.urlencoded({ extended: true })) //url encode, formate data to json
app.use(bodyParser.json())

app.use('/age/:age', (req, res, next) => {
    if (req.params.age < 18) {
        res.redirect('/fail')
    }
    next()
})
app.get('/fail', (req, res) => {
    res.send(`Your age low, you can't access this website sorry`)
})
app.get('/age/:age', (req, res) => {
    res.send(`Your age: ${req.params.age}, you are eligble`)
})

// Serve static file
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

// get form method
app.get('/get-data', (req, res) => {
    res.send(`Name: ${req.query.name}, Email: ${req.query.email} `)
})
// post form method, must use middleware => body-parser
app.post('/', (req, res) => {
    res.send(`Name: ${req.body.name}, Email: ${req.body.email} `)
})

// Cookies
const cookieParser = require('cookie-parser')
app.use(cookieParser());
app.get('/cook', (req, res) => {
    // console.log(`Cookies: ${req.cookies}`)
    // res.cookie('name', 'Pratap Das').send('Cookie set') //check console => document.cookie

    // Cookies Set time
    res.cookie('name', 'Pratap Das', { expire: 10000 + Date.now() })
    res.send('Cooke set')
})

// Session
const session = require('express-session')
app.use(session({ secret: 'Type anything here' }))
app.get('/ses', (req, res) => {
    req.session.username = 'pratap'
    if (req.session.user_visit) {
        req.session.user_visit++
        res.send(`Your are visted ${req.session.user_visit} times`)
    } else {
        req.session.user_visit = 1
        res.send(`Session set, you are vist 1st time`)
    }
})
app.get('/get-ses', (req, res) => {
    res.send(`Your session username: ${req.session.username}`)
})










app.listen(4200)