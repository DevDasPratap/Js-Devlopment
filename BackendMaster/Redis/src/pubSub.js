import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const subscriber = new Redis("redis://localhost:6379");
const publisher = new Redis("redis://localhost:6379");

subscriber.subscribe("notifications", (err) => {
  if (err) {
    console.log("Failed to subscribe:", err.message);
    return;
  }

  console.log("Subscribed successfully");
});

subscriber.on("message", (channel, message) => {
  console.log(
    "Received on:",
    channel,
    JSON.parse(message)
  );
});

app.post("/notification", async (req, res) => {
  try {
    const payload = {
      title: req.body.title || "Default title",
      createdAt: new Date().toISOString(),
    };

    const receivers = await publisher.publish(
      "notifications",
      JSON.stringify(payload)
    );

    res.json({
      success: true,
      receivers,
      payload,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});