// const express = require('express')
// const app = express()

// app.listen(3000, ()=>{
//     console.log('Server running on port: 3000 ')
// })

const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)

const io = require('socket.io')(http)
app.get('/', (req,res)=>{
    const options = {
        root: path.join(__dirname)
    }
    const fileName = 'index.html'
    res.sendFile(fileName, options)
})

io.on('connection', (socket)=>{
    console.log('A user connected')
    setTimeout(()=>{
        // socket.send('sent message from server side')
        socket.emit('customEvent', {description:'A custom message from server'})
    }, 3000)

    // custom event from client
    socket.on('customClientEvent', (data)=>{
        console.log(data)
    })
    socket.on('disconnect', ()=>{
        console.log('A user disconnected')
    })
})

http.listen(3000, ()=>{
    console.log('Server running on port: 3000 ')
})