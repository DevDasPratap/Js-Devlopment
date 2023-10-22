require('dotenv').config()
const http = require('http')
const app = require('./app/app')

const server = http.createServer(app)
const port = process.env.PORT || 5555
server.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})