import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

async function init() {
  try {
    const result = await client.responses.create({
      model: "gpt-5.1-mini",
      input: "Hey there, my name is Pratap Das",
    });

    console.log(result.output_text);
  } catch (err) {
    console.error(err);
  }
}

init();