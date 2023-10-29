const express = require('express')
const connectDB = require('./db')
const authenticate = require('./middleware/jwt.middleware')
const index_router = require('./routes')
const app = express()
app.use(express.json())

app.use(index_router)

app.get('/private', authenticate, async (req, res) => {
    return res.status(200).json({ message: 'I am private' })
})
app.get('/public', (req, res) => {
    return res.status(200).json({ message: 'I am public' })
})
app.get('/', (_, res) => {
    res.json()
})
app.use((err, req, res, next) => {
    console.log(err)
    const err_msg = err.message ? err.message : 'Server error occured'
    const status = err.status ? err.status : 500
    res.status(status).json(
        {
            err_msg
        }
    )
})
const uri = 'mongodb://localhost:27017/auth_by_pd'
connectDB(uri).then(() => {
    console.log(`DB connected`)
    app.listen(4200, () => {
        console.log(`Server running on port 4200`)
    })
}).catch((err) => {
    console.log(`Got error: ${err}`)
})
