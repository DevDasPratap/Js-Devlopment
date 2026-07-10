# Consensus AI - Self-Consistency Answer Engine

A premium, UI-based GenAI web application that implements the **Self-Consistency prompting technique**. It queries multiple model endpoints in parallel, gathers their individual outputs, and routes them to a final evaluator model (Claude Sonnet 5) to synthesize a single refined consensus answer.

---

## 🚀 How the Self-Consistency Flow is Implemented

1. **User Query Input**: The user enters a question or prompt in the main search panel.
2. **Parallel Model Execution**: The application triggers parallel asynchronous API calls to three separate models from different providers:
   * **OpenAI (GPT-OSS 120B)**: `openai.gpt-oss-120b`
   * **Google Gemma (Gemma 4 31B)**: `google.gemma-4-31b`
   * **DeepSeek (DeepSeek V3)**: `deepseek.v3.1`
3. **Real-time Status Grid**: The responses from each model load concurrently and are rendered side-by-side in custom cards showing their specific status (Idle $\rightarrow$ Loading $\rightarrow$ Done/Error).
4. **Claude Consensus Synthesis**: After all parallel queries settle, the engine formats their respective outputs and injects them into the evaluator model (**Anthropic Claude Sonnet 5** - `anthropic.claude-sonnet-5`).
5. **Evaluator Synthesis Prompt**: Claude is instructed to:
   * Resolve any contradictions or omissions between the responses.
   * Combine the most accurate and practical elements.
   * Structure the final output inside `<consensus>` and `<insights>` tags to separate the refined final answer from the evaluation metrics.
6. **Polished Dual-Tab UX**: The synthesized output is presented in a full-width bottom card with tabs that allow users to inspect the final consensus answer and read Claude's underlying synthesis logic.

---

## 💻 Tech Stack & Setup

* **Frontend**: React (Vite) styled with Vanilla CSS using dark-glassmorphism accents and custom micro-animations.
* **AI Orchestration**: Browser-safe client-side integration using the `openai` SDK pointing to the AWS Bedrock endpoint proxy.

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1. Navigate to the project directory:
   ```bash
   cd GenAI-JavaScript/self-consistency-engine
   ```
2. Install all dependencies:
   ```bash
   npm run install:all
   ```
3. Set up environment variables:
   A `.env` file is pre-configured inside `client/` containing the Bedrock proxy credentials:
   ```env
   VITE_OPENAI_API_KEY="your-bedrock-api-key"
   VITE_OPENAI_BASE_URL="https://bedrock-mantle.us-east-1.api.aws/v1"
   ```

### Running Locally
Run the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to **http://localhost:5173**.
