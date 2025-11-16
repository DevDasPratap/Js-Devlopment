import express from "express";
import { cacheMiddleware } from "./cache.js";
import { authMiddleware } from "./auth.js";
import { rateLimiter } from "./rateLimiter.js";
import { forwardRequest } from "../core/Gateway.js";

export const router = express.Router();

// Example API route
router.get("/user/:id", authMiddleware, rateLimiter, cacheMiddleware, async (req, res) => {
  const response = await forwardRequest(req, "USER");
  res.json(response);
});

// Generic route forwarding
router.all("/:service/*", authMiddleware, rateLimiter, cacheMiddleware, async (req, res) => {
  const serviceName = req.params.service.toUpperCase();
  const response = await forwardRequest(req, serviceName);
  res.json(response);
});
