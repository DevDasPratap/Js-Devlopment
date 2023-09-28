import {config} from 'dotenv';
config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';
const app = express()

app.use(express.json()) // Parse data into json when request body data get
app.use(cors({
    origin:[process.env.FRONTED_URL],
    credentials:true
}))

app.use(cookieParser()) // token parse in cookie

app.use(morgan('dev')) // log check in terminal

app.use('/ping', function (req, res) {
    res.send('Pong')
})

// Routes of 3 modules
// User route
app.use('/api/v1/user', userRoutes)


app.all('*', (req, res)=>{
    res.status(404).send(`OOPS! 404 `)
})

// create app error general middleware
app.use(errorMiddleware)

export default app