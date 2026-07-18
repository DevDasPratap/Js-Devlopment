import OpenAI from "openai";
import dotenv from "dotenv";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { QdrantVectorStore } from "@langchain/qdrant";
import path from "path";
import { fileURLToPath } from "url";

// Resolve paths correctly relative to this script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, "../.env");

// Configure dotenv
dotenv.config({ path: envPath });

// Initialize OpenAI client for Bedrock Mantle
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

async function queryRAG(userQuery) {
  console.log(`\nUser Question: "${userQuery}"`);

  // Initialize the same local embedding model used for indexing
  const embedding = new HuggingFaceTransformersEmbeddings({
    modelName: "Xenova/all-MiniLM-L6-v2",
  });

  console.log("Connecting to Qdrant vector store...");
  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    embedding,
    {
      url: "http://localhost:6333",
      collectionName: "vectorDBForRAG",
    }
  );

  console.log("Performing similarity search...");
  const searchResults = await vectorStore.similaritySearch(userQuery, 2);

  if (searchResults.length === 0) {
    console.log("No matching context found.");
    return;
  }

  // Combine retrieved context text
  const contextText = searchResults.map(doc => doc.pageContent).join("\n\n");
  console.log(`\n=== Retrieved Context (Top Matches) ===\n${contextText.substring(0, 500)}...\n`);

  // Augment the prompt and send to Bedrock Mantle
  console.log("Generating response using Bedrock Mantle (openai.gpt-oss-120b)...");
  
  const systemPrompt = `You are a helpful assistant. Answer the user's question using ONLY the provided context below. If you cannot answer using the context, state "I cannot find the answer in the context."

[CONTEXT]
${contextText}`;

  try {
    const result = await client.responses.create({
      model: "openai.gpt-oss-120b",
      input: `${systemPrompt}\n\n[USER QUESTION]\n${userQuery}`,
    });

    console.log(`\n=== FINAL ANSWER ===\n${result.output_text}\n`);
  } catch (error) {
    console.error("Failed to generate response using responses.create, trying chat.completions fallback...");
    try {
      const completion = await client.chat.completions.create({
        model: "openai.gpt-oss-120b",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `${userQuery}` }
        ],
        temperature: 0.1,
      });
      console.log(`\n=== FINAL ANSWER (Fallback) ===\n${completion.choices[0].message.content}\n`);
    } catch (fallbackError) {
      console.error("All LLM invocation attempts failed:", fallbackError.message);
    }
  }
}

// Execute with a test query about Sudoku rules
const question = "What rules must a Sudoku solution satisfy?";
queryRAG(question).catch(console.error);
