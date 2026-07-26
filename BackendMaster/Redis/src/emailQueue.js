/**
 * hset
 * hget
 * hdel
 * hexists
 */

import express from "express";
import Redis from "ioredis";
import mongoose from "mongoose";

const app = express();
app.use(express.json())

const redisClient = new Redis("redis://localhost:6379");
const QUEUE_KEY = 'queue:email'

app.post('/emails', async (req, res) => {
  try {
    const job = {
      to: req.body.to,
      subject: req.body.subject || 'No subject',
      body: req.body.body || 'No content',
      createdAt: new Date().toISOString()
    }
    await redisClient.lpush(QUEUE_KEY, JSON.stringify(job))
    // res.json({enqueue: true})
    res.json({ queued: true, job })
  } catch (error) {
    console.log('Error: ', error)
  }
})

app.get('/emails/process', async (req, res) => {
  try {
    const rawJob = await redisClient.rpop(QUEUE_KEY)
    if (!rawJob) {
      return res.json({ message: 'No jon in the Queue' })
    }
    const job = JSON.parse(rawJob)
    res.json({ message: 'Email sent', job })
  } catch (error) {
    console.log('Error: ', error)
  }
})

app.get("/all", async (req, res) => {
  try {
    const jobs = await redisClient.lrange(QUEUE_KEY, 0, -1);

    const emails = jobs.map((job) => JSON.parse(job));

    res.json({
      total: emails.length,
      emails,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});