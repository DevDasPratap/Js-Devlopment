import express from "express";
import { PORT } from "./config/env.js";  // Ensure correct import
import authRouter from "./routes/auth.router.js";
import subscriptionRouter from "./routes/subscription.router.js";
import userRouter from "./routes/user.router.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/subscription', subscriptionRouter)

app.get("/", (req, res) => {
  res.send(`Welcome to the subscription tracker API`);
});


app.listen(PORT, () => {
  console.log(`Subscription tracker API is running on port: ${PORT}`);
  connectToDatabase()
});

export default app;
