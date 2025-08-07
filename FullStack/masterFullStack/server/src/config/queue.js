import { Queue } from 'bullmq';
import { redisConnection, defaultQueueConfig } from './redis.js';

export const myQueue = new Queue('my-queue-name', {
  connection: redisConnection,
  defaultJobOptions: defaultQueueConfig,
});
