import OpenAI from "openai";
import dotenv from "dotenv";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { QdrantVectorStore } from "@langchain/qdrant";
import path from "path";
import { fileURLToPath } from "url";

// Resolve paths correctly relative to this script file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, "../.env");
const defaultPdfPath = path.join(__dirname, "Recursion & Backtracking.pdf");

// Configure dotenv to load environment variables from the parent folder
dotenv.config({ path: envPath });

async function generateVectorEmbaddingForFile(filepath) {
    if (!filepath) {
        throw new Error("No PDF filepath specified.");
    }

    console.log(`Loading PDF content from: ${filepath}`);
    const loader = new PDFLoader(filepath);
    const documents = await loader.load();

    console.log(`Successfully loaded ${documents.length} pages/documents.`);

    // Initialize a local HuggingFace embedding model (running locally in Node.js via ONNX).
    // This resolves the 404 error since Bedrock Mantle does not host embedding endpoints.
    const embedding = new HuggingFaceTransformersEmbeddings({
        modelName: "Xenova/all-MiniLM-L6-v2",
    });

    console.log("Connecting to Qdrant vector store at http://localhost:6333...");
    
    // QdrantVectorStore.fromDocuments automatically creates the collection if it doesn't exist
    const vectorStore = await QdrantVectorStore.fromDocuments(
        documents,
        embedding,
        {
            url: 'http://localhost:6333',
            collectionName: 'vectorDBForRAG'
        }
    );

    console.log(`Successfully indexed all documents in Qdrant collection 'vectorDBForRAG'.`);
}

// Execute the function resolving path dynamically
generateVectorEmbaddingForFile(defaultPdfPath).catch((err) => {
    console.error("\n[Error during indexing execution]:");
    console.error(err.stack || err.message);
});