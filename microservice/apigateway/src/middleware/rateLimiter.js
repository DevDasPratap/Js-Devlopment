import rateLimit from "express-rate-limit";
import env from "../config/index.js";

export const rateLimiter = rateLimit({
  windowMs: Number(env.RATE_LIMIT_WINDOW),
  max: Number(env.RATE_LIMIT_MAX_REQUESTS),
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests, please try again later."
});
