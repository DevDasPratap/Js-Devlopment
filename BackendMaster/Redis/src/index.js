import express from "express";
import Redis from "ioredis";
import mongoose from "mongoose";

const app = express();

const redisClient = new Redis("redis://localhost:6379");

app.get("/redis", async (req, res) => {
  const reply = await redisClient.ping();
  res.json({ redis: reply });
});

const url = "mongodb://localhost:27017/mongoDB";

app.get("/mongo", async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(url);
  }

  res.json({
    mongo: "connected",
    database: mongoose.connection.name,
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});