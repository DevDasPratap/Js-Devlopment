import express from "express";
import Redis from "ioredis";
import mongoose from "mongoose";

const app = express();
app.use(express.json())

const redisClient = new Redis("redis://localhost:6379");

const BANNER_KEY = "app:banner"
app.post("/banner", async(req, res)=>{
await redisClient.set(BANNER_KEY, req.body.message || 'Welcome to redis banner')
res.json({success: true})
})

app.get('/banner', async(req, res)=>{
    const message = await redisClient.get(BANNER_KEY)
    res.json({message})
})

app.delete("/banner", async(req, res)=>{
    await redisClient.del(BANNER_KEY)
    res.json({success: true})
})

app.get('/banner/exists', async(req, res)=>{
    const exists = await redisClient.exists(BANNER_KEY)
    res.json({exists: Boolean(exists)})
})

app.listen(8001, () => {
  console.log("Server is running on port 8001");
});