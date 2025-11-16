import Redis from "ioredis";
import env from "../config/index.js";

const redis = new Redis({
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
  password: env.REDIS_PASSWORD || undefined
});

export const cacheMiddleware = async (req, res, next) => {
  const key = `cache:${req.originalUrl}`;
  const cached = await redis.get(key);
  if (cached) return res.json(JSON.parse(cached));

  res.sendResponse = res.json;
  res.json = (body) => {
    redis.setex(key, Number(env.REDIS_TTL), JSON.stringify(body));
    res.sendResponse(body);
  };
  next();
};
