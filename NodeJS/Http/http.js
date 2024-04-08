/*
It is a protocol used to transmitting data over the internet,
HTTP defines how clients and servers communicate with each other
and how req, res should be formatted and transmitted.

http module- Node http is an intregral component that
facilitates various aspects of the http protocol

HTTP module:
     - Hypertext Transport Protocol modules of Nodejs
     - HTTP modules is the core modules of Nodejs
     - HTTP modules provide way to create server and handle HTTP request and response.
     - It exposes various classes, functions and properties to work with HTTP 
     - To use the HTTP server and Client one must require(“node:http”)

Feature of HTTP module
     - Create an HTTP server using `http.createServer()`
     - Listen to incoming request using the `server.listen()` method
     - Handle incoming requests and send responses using the `request` and `response` object passed to the server’s request event
     - Set headers on the response object using `response.setHeader()`
     - Write data to the response object using `response.write()`
     - End the response using `response.end()` 
     - Send an HTTP request to a server using `http.request()`
     - Receive a response from a server using the `response` event of the `http.clientRequest` object returned by `http.request()`

Server with HTTP module
     - const http = require("node:http"); // getting the http module
     - 
     - const port = 3000; // initializing the port no.
     - const host = "localhost"; // define the hostname
     - 
     - const server = http.createServer((req, res) => { // create server
     -   res.statusCode = 200; // set to 200 to indicate it is successful
     -   res.setHeader( "Content-type", "text/plain"); // set content type to plain text
     -   res.end("hello world"); // end with ‘hello world’ text return
     - });
     - 
     - server.listen(port, () => { // list to the define port.
     -   console.log(`Server running at ${host}:${port}`);
     - });
     - 

https://www.example.com/course/search?q=term#javascript

http/https - protocol/scheme
www - sub-domain
www.example.com - hostname
example - domain
com - extention/toplevel domain
course/search - path
?q=term - query string
#javascript - slug/resourse
port - 
*/

const http = require('http')
// console.log(http)
// console.log(http.STATUS_CODES)

const server = http.createServer((req, res)=>{
    if (req.url == '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write(`<h1>Home</h1>`)
    }else if (req.url == '/about') {
        res.write(`<p>About</p>`)
    }else if (req.url == '/product') {
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products',
            method: 'GET'
        }
        const API_REQUEST = http.request(options, (API_RESPONSE)=>{
            API_RESPONSE.on('data', (data)=>{
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end.JSON.stringify(data.toString())
            })
        })
        API_REQUEST.on('error', (e)=>{
            console.log(e)
        })
        API_REQUEST.end()
    }
})

server.listen(5001)
console.log('The server is running')