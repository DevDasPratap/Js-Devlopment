/*
It is a protocol used to transmitting data over the internet,
HTTP defines how clients and servers communicate with each other
and how req, res should be formatted and transmitted.

http module- Node http is an intregral component that
facilitates various aspects of the http protocol

*/

const http = require('http')
// console.log(http)
// console.log(http.STATUS_CODES)

const server = http.createServer((req, res)=>{
    if (req.url == '/') {
        res.write(`<h1>Home</h1>`)
    }else if (req.url == '/about') {
        res.write(`<p>About</p>`)
    }
    res.end()
})

server.listen(5001)
console.log('The server is running')