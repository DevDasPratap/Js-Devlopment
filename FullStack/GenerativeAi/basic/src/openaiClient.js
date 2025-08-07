import { OpenAI } from "openai";
import env from "./config.js";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export default openai;
