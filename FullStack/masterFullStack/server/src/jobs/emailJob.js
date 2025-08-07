import { Queue, Worker } from "bullmq";
import { defaultQueueConfig, redisConnection } from "../config/radis.js";

export const emailQueue = new Queue("email", {
  connection: redisConnection,
  defaultJobOptions: defaultQueueConfig
});

export const emailWorker = new Worker(
  "email",
  async (job) => {
    const data = job.data;
    console.log("Processing email job:", data);
    // Simulate sending an email
    console.log(`Sending email to ${job.data.email}`);
    // Here you would integrate with your email service
    // For example, using nodemailer or any other email service
    return Promise.resolve();
  },
  {
    connection: redisConnection
  }
);