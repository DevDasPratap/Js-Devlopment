import express from "express";
import Redis from "ioredis";
import mongoose from "mongoose";
import { Queue } from "bullmq";

const app = express();
app.use(express.json())

export const redisClient = new Redis("redis://localhost:6379");

const emailQueue = new Queue('emails', {redisClient})

app.post('/welcome-email', async (req, res) => {
  const job = emailQueue.add(
    "send-welcome-email",
    {
      to:req.body.to,
      name: req.body.name
    },
    {
      attempts: 4,
      backoff:"exponential",
      delay: 1000
    }
  )
  res.json({message: "Welcome email job added to the queue!", jobId: job.id})
})

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});