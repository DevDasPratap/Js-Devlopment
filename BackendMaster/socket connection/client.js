const net = require('net')

const client = net.createConnection({port:9000}, ()=>{
    console.log('Client connected')
    client.write('Hello from client')
})

client.on('data', (serverData)=>{
    console.log('Data recived from server', serverData.toString())
})

// net module work on transport layer