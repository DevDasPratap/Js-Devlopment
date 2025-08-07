import IORedis from 'ioredis';

export const redisConnection = new IORedis({
  host: process.env.REDIS_HOST,
  port: 6379,
  maxLoadingRetryTime: null,
  maxRetriesPerRequest: null,
});

export const defaultQueueConfig = {
  removeOnComplete: {
    count: 20, // Keep the last 20 completed jobs
    age: 60 * 60, // 1 hour
  },
  attempts: 3, // Number of attempts to process a job
  backoff: {
    type: 'exponential',
    delay: 1000, // Delay in milliseconds
  },
};
