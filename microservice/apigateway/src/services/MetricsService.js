import client from "prom-client";
import env from "../config/index.js";

export const initMetrics = (app) => {
  const collectDefaultMetrics = client.collectDefaultMetrics;
  collectDefaultMetrics({ timeout: 5000 });

  app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
  });
};
