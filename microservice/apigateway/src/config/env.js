import dotenv from "dotenv";
dotenv.config();

export default {
  APP_NAME: process.env.APP_NAME,
  ENV: process.env.ENV,
  APP_PORT: process.env.APP_PORT || 9000,
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
  JWT_TOKEN_ISSUER: process.env.JWT_TOKEN_ISSUER,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_TTL: process.env.REDIS_TTL,
  RATE_LIMIT_WINDOW: process.env.RATE_LIMIT_WINDOW,
  RATE_LIMIT_MAX_REQUESTS: process.env.RATE_LIMIT_MAX_REQUESTS,
  PROMETHEUS_PORT: process.env.PROMETHEUS_PORT,
  SERVICES: {
    USER: process.env.USER_SERVICE_URL,
    AUTH: process.env.AUTH_SERVICE_URL,
    RIDE: process.env.RIDE_SERVICE_URL,
    MAP: process.env.MAP_SERVICE_URL,
    PRICING: process.env.PRICING_SERVICE_URL
  }
};
