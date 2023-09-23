/*
Features http:
1. create server
2. listen
3. req, res
4. res.setHeader
5. res.write
res.end
http.request- server to server communication
*/
// const http = require('http')
// const port = 4041
// const hostname = 'localhost'
// const server = http.createServer((req, res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('NServer created')
// })

// server.listen(port, ()=>{
//     console.log(`Server running at ${hostname} on ${port}`)
// })


// server server request call
const http = require('http')
const port = 4042
const hostname = 'localhost'
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Home page')
    } else if (req.url == '/about') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('About page')
    } else if (req.url == '/contact') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Contact page')
    } else if (req.url == '/product') {
        // server to server conncet 
        // get data from api
        const options = {
            hostname: 'fakestoreapi.com',
            path:'/products/1',
            method:'GET'
        }
        const apiRequest = http.request(options, (apiResponse)=>{
            apiResponse.on('data', (data)=>{
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(data.toString())
                console.log(data.toString())
            })
        })
        apiRequest.on('error', (error)=>{
            console.log(error)
        })
        apiRequest.end()
    } else {
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/plain')
        res.end('Error')
    }
})

server.listen(port, () => {
    console.log(`Server running at ${hostname} on ${port}`)
})