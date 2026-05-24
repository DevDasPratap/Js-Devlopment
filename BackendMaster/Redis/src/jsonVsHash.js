/**
 * STRING (set/get)
 *
 * set() stores a single value against one key.
 *
 * Important:
 * - Redis SET does NOT partially update object fields
 * - If you call SET again on same key,
 *   old value is completely replaced
 *
 * Example:
 *
 * SET user:1 '{"name":"Pratap","age":25}'
 *
 * Again:
 *
 * SET user:1 '{"name":"Rahul"}'
 *
 * Final stored value:
 * {
 *   "name":"Rahul"
 * }
 *
 * Previous age field is removed because
 * SET replaces the entire value.
 *
 *
 * HASH (hset/hgetall)
 *
 * HASH stores field-value pairs like object properties.
 *
 * Important:
 * - hset() can update single fields
 * - Existing fields remain unchanged
 * - Better for partial updates
 *
 * Example:
 *
 * HSET user:1 name Pratap age 25
 *
 * Again:
 *
 * HSET user:1 city Kolkata
 *
 * Final hash:
 * {
 *   name: "Pratap",
 *   age: "25",
 *   city: "Bengalore"
 * }
 *
 * Existing fields are NOT deleted.
 */

import express from "express";
import Redis from "ioredis";

const app = express();

app.use(express.json());

/**
 * Connect Redis Server
 */
const redisClient = new Redis("redis://localhost:6379");

/**
 * ---------------------------------------------------
 * Store Complete JSON using STRING
 * ---------------------------------------------------
 *
 * Redis SET stores data as string
 * So we convert object -> JSON string
 */
app.post("/user/:id/json", async (req, res) => {
  const key = `user:${req.params.id}:json`;

  // Convert object to JSON string
  await redisClient.set(key, JSON.stringify(req.body));

  res.json({
    message: "User stored as JSON string",
    key,
    data: req.body,
  });
});

/**
 * Get Complete JSON STRING
 */
app.get("/user/:id/json", async (req, res) => {
  const key = `user:${req.params.id}:json`;

  // Get string from Redis
  const raw = await redisClient.get(key);

  res.json({
    user: raw ? JSON.parse(raw) : null,
  });
});

/**
 * ---------------------------------------------------
 * Store Object using HASH
 * ---------------------------------------------------
 *
 * hset stores field-value pairs
 *
 * Example Redis structure:
 *
 * user:1:hash
 *   name => Pratap
 *   age  => 25
 */
app.post("/user/:id/hash", async (req, res) => {
  const key = `user:${req.params.id}:hash`;

  // Store request body fields inside hash
  await redisClient.hset(key, req.body);

  res.json({
    message: "User stored as HASH",
    key,
    data: req.body,
  });
});

/**
 * Get HASH object
 */
app.get("/user/:id/hash", async (req, res) => {
  const key = `user:${req.params.id}:hash`;

  // Returns complete object
  const raw = await redisClient.hgetall(key);

  res.json({
    user: raw,
  });
});

/**
 * Start Express Server
 */
app.listen(8004, () => {
  console.log("Server is running on port 8004");
});