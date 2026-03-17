const grpc = require('@grpc/grpc-js')
const {GreetServiceClient} = require('../proto/greet_grpc_pb.js')

// main function

const address = 'localhost:5050'
function main() {
    const creds = grpc.ChannelCredentials.createInsecure()
    const client = new GreetServiceClient(address, creds)

    // 

    client.close()
}

main()