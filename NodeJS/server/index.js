// HTTP server
const http = require('http')

// create server
const server = http.createServer((req, res) => {
    // res.write(`<h1>Hi</h1>`)
    // res.end('I am from node server, req: ' + req.url)

    // Route handle
    if (req.url === '/') {
        res.end('Home page')
    }else if (req.url === '/about') {
        res.end('About page')
    }else if (req.url === '/contact') {
        res.end('contact page')
    }else{
        res.writeHead(404, {'Content-type': 'text/html'})
        res.end('404 page not found')
    }

})


// server running mention port
const port = 4200
server.listen(port, 'localhost', () => {
    console.log(`Node server running on ${port}`)
})