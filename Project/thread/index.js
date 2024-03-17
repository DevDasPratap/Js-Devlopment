const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const app = express()
const PORT = 8001
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


async function init() {
    // Create graphQL server
    const gqlServer = new ApolloServer({
        typeDefs: `
        type Query {
            hello: String
            say(name:String):String
        }
        `,
        resolvers: {
            Query: {
                hello: () => `Hey there i am GraphQL server`,
                say: (_, { name }) => `Hey ${name}, how are you?`,
            }
        }
    })

    // Start the GQL server
    await gqlServer.start()


    app.get('/', (req, res) => {
        res.json({ message: 'Serve' })
    })

    app.use('/graphql', expressMiddleware(gqlServer))

    app.listen(PORT, (req, res) => {
        console.log(`Server started on port: ${PORT}`)
    })
}

init()