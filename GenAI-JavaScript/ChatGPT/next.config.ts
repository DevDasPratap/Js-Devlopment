import type { NextConfig } from "next";

// Sanitize environment variables to prevent empty string crashes in `@ai-sdk/openai` during build
if (process.env.OPENAI_BASE_URL === "" || process.env.OPENAI_BASE_URL === "''") {
  delete process.env.OPENAI_BASE_URL;
}
if (process.env.OPENAI_API_KEY === "" || process.env.OPENAI_API_KEY === "''") {
  delete process.env.OPENAI_API_KEY;
}

/** Next.js application configuration. */
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
