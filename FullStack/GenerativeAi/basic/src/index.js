import openai from "./openaiClient.js";
import genAI from './geminiClient.js';
import { generateResponse } from './aiService.js';

// async function run() {
//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//       { role: "user", content: "Hello, how are you?" },
//       //   {
//       //     role: "assistant",
//       //     content: "I'm doing great, thank you! How can I assist you today?",
//       //   },
//       //   {
//       //     role: "system",
//       //     content:
//       //       "You are a helpful assistant that provides information and answers questions.",
//       //   },
//     ],
//   });
//   console.log(response.choices[0].message.content);
// }
// run();


// async function testOpenAI() {
//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Tell me a joke about JavaScript." }],
//   });

//   console.log("🤖 OpenAI GPT says:\n", response.choices[0].message.content);
// }

// async function testGemini() {
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   const result = await model.generateContent("Tell me a joke about JavaScript.");
//   const response = await result.response;
//   const text = response.text();

//   console.log("🧠 Gemini says:\n", text);
// }

// async function run() {
//   await testOpenAI();
//   console.log("\n---\n");
//   await testGemini();
// }

// run();



async function run() {
//   const prompt = "Tell me a joke about JavaScript.";
  const prompt = "Hello, how are you?";
  const result = await generateResponse(prompt);
  console.log("My Prompt:", prompt)
  console.log(result);
}

run();
