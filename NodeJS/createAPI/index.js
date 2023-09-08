const http = require('http')
const fs = require('fs')
// create server
const server = http.createServer((req, res) => {
    // res.write(`<h1>Hi</h1>`)
    // res.end('I am from node server, req: ' + req.url)

    // Route handle
    if (req.url === '/') {
        res.end('Home page')
    } else if (req.url === '/users') {
        res.writeHead(200, {'Content-type':'application/json'})
        fs.readFile(`${__dirname}/users.json`, 'utf-8', (error, data) => {
            // console.log(data)
            const objData = JSON.parse(data)
            // res.end(data)
            res.end(objData[0].name)
        })
    } else if (req.url === '/contact') {
    } else if (req.url === '/about') {
        res.end('About page')
    } else if (req.url === '/contact') {
        res.end('contact page')
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' })
        res.end('404 page not found')
    }

})


// server running mention port
const port = 4200
server.listen(port, 'localhost', () => {
    console.log(`Node server running on ${port}`)
})