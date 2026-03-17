const grpc = require('@grpc/grpc-js')
const serviceImpl = require('./service_inpl.js')
const {GreetService} = require('../proto/greet_grpc_pb.js')

const address = 'localhost:5050'
// main function
function main() {
    const server = new grpc.Server()
    const creds = grpc.ServerCredentials.createInsecure()

    process.on('SIGINT', ()=>{
        console.log('Caught interrupt signal')
        cleanUp(server)
    })

    server.addService(GreetService, serviceImpl)
    server.bindAsync(address, creds, (err, _)=>{
        if (err) {
            return cleanUp(server)
        }
        // No server.start() needed
    })
    console.log('Listing on: ', address)
}

// clean up function

function cleanUp(server) {
    console.log('Cleanup')
    if(server){
        server.forceShutdown()
    }
}

main()