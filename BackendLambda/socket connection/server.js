// meaning of localhost
// HOST = 'localhost'
// PORT = 9000

// create socket connection
// bind the socket object to the host and port
// start listing for new connection
// wait for new clinet connection


const net = require('net')
const server = net.createServer((socket)=>{
    // server get data
    socket.on('data', (clientData)=>{
        console.log('Data received from client', clientData.toString())
        //server send to back to client
        socket.write('Rechived on server thank you')
    })
})

const HOST = 'localhost'
const PORT = 9000
server.listen(PORT, ()=>{
    console.log('Server UP on port ', + PORT)
})