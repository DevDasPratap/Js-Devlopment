import "dotenv/config"
import express from "express";
import router from "./route/index.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('Hello prisma server')
})

app.use(router)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})