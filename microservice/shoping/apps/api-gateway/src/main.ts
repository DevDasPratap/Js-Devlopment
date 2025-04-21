/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import cors from "cors";
import proxy from "express-http-proxy";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import swaiggerUi from "swagger-ui-express";
import axios from "axios";
import cookieParser from "cookie-parser";

// import * as path from 'path';
const app = express();

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json({limit: "100mb" }));
app.use(express.urlencoded({limit: "100mb", extended: true }));

app.set('trust proxy', true);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: (req:any) => (req.user ? 1000 : 100), // Limit each IP to 100 requests per windowMs
  message: {error: 'Too many requests, please try again later.'},
  statusCode: 429, // HTTP status code to send when the limit is reached
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skipSuccessfulRequests: true, // Skip successful requests
  skipFailedRequests: false, // Do not skip failed requests
  keyGenerator: (req:any, res:any) => {
    // Generate a unique key for each request
    return req.ip;
  }
});
app.use(limiter);

app.use('/', proxy('http://localhost:8000'));

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/gateway-health', (req, res) => {
  res.send({ message: 'Welcome to api gateway!' });
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
