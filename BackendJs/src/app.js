import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// app.use(express.json()) // for body data
app.use(express.json({limit: '16kb'})) //for body data
// app.use(express.urlencoded()) //for param data 
app.use(express.urlencoded({extended:true, limit: '16kb'})) //for param data 
app.use(express.static("public")) //for static data/file

app.use(cookieParser()) //for cookie

export { app };
