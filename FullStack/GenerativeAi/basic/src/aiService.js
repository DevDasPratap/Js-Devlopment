import openai from './openaiClient.js';
import genAI from './geminiClient.js';

export async function generateResponse(prompt) {
  // Try OpenAI first
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const reply = response.choices[0].message.content;
    if (reply) return `🤖 OpenAI: ${reply}`;
  } catch (err) {
    console.warn("⚠️ OpenAI failed:", err.message);
  }

  // Fallback to Gemini
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return `🧠 Gemini: ${text}`;
  } catch (err) {
    console.error("❌ Gemini also failed:", err.message);
    return "Both OpenAI and Gemini failed to respond.";
  }
}
