// geminiClient.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const key : string = process.env.GOOGLE_API_KEY || ''
const genAI = new GoogleGenerativeAI(key);

const prompt = "Hello";

  // Fallback to Gemini
async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    // console.log('text', text)
    // return `🧠 Gemini: ${text}`;
    return text
}

const result = run()

result.then((res:any)=>{
if (res) {
    console.log('Res: ', res)
}
}).catch((error:Error)=>{
    console.log('Error: ', error)
})