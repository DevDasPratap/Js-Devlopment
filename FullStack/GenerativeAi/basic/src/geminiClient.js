// geminiClient.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import env from "./config.js";

const genAI = new GoogleGenerativeAI(env.GOOGLE_API_KEY);

export default genAI;
