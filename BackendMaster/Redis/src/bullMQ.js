import express from "express";
import Redis from "ioredis";
import mongoose from "mongoose";

const app = express();
app.use(express.json())

const redisClient = new Redis("redis://localhost:6379");



app.listen(8000, () => {
  console.log("Server is running on port 8000");
});