# Creator Persona AI Chat Simulator

A premium, AI-powered web application that simulates chat conversations with prominent Indian tech educators: **Hitesh Choudhary** ("Chai aur Code") and **Piyush Garg**. The application replicates their unique teaching styles, communication tones, and personality traits.

---

## 🛠️ Tech Stack & Architecture
- **Frontend**: React (Vite) styled with Vanilla CSS using CSS variables to implement dual warm cafe/chai and neon cyberpunk terminal themes dynamically.
- **AI Integration**: Calls the AWS Bedrock proxy directly from the browser using the `openai` SDK (`dangerouslyAllowBrowser: true`).
- **State Management**: React state handles active personas, stores independent conversation arrays for each creator to prevent memory overlap, and manages request load indicators.

---

## 🧑‍💻 Creator Persona Profiles & Prompts

### 1. Hitesh Choudhary
- **Vibe/Tone**: Energetic, informal, warm, and highly conversational. Speeds up tutorials with real-world context and CTO-level decisions.
- **Language**: Hinglish (mix of Hindi & English) or English depending on user choice.
- **Signature Style**: Greets users asking if their tea (Chai) is ready. Emphasizes daily coding consistency ("Consistency is key") and reading official documentation ("Documentation padhna seekho").
- **Theme**: Cozy cafe with warm amber and orange accent glow.

### 2. Piyush Garg
- **Vibe/Tone**: Calm, polite, structured, and focused directly on execution, system designs, and backend architecture.
- **Language**: Greet with "Hello World", speaking in a supportive mentor style ("Bhaiya" vibe).
- **Signature Style**: Explains complex backend tools (Docker, AWS, Redis) clearly. Advocates for hands-on, project-based coding ("Build developers, not just apps").
- **Theme**: Sleek slate-blue and cyan cyberpunk developer terminal.

---

## 🧠 System Design and Design Decisions

### 1. Persona Data Collection
We studied publicly available YouTube channels, tutorials, tech talks, blogs, and portfolio sites (e.g., [Hitesh.ai](https://hitesh.ai/) and [PiyushGarg.dev](https://www.piyushgarg.dev/)) to analyze their vocabulary, tone, catchphrases, and teaching philosophies.

### 2. Prompt Engineering Strategy
We used **Role-Play Prompting** coupled with explicit system constraints in the prompt templates. The system prompts specify:
- Personality traits and tone definitions.
- Language-matching rules (e.g., output Hinglish when user writes Hinglish).
- Standard catchphrases and greetings to prepend/use contextually.
- Concrete guidelines regarding subject matter expertise (Hitesh's CTO background vs Piyush's backend architecture focus).

### 3. Context Management Approach
To maintain persona integrity across long conversations:
- The full conversation history is stored in memory and sent as the payload on each message request.
- The system persona prompt is injected as the *initial system message* on every API call.
- Conversational state is tracked independently for each persona, allowing users to toggle between Hitesh and Piyush without wiping ongoing discussions.

---

## 💻 Setup & Running Locally

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1. Navigate to the project directory:
   ```bash
   cd GenAI-JavaScript/persona-chat-app
   ```
2. Install dependencies:
   ```bash
   npm run install:all
   ```
3. Set up the environment variables:
   A `.env` file has been pre-configured inside the `client/` directory with the AWS Bedrock keys:
   ```env
   VITE_OPENAI_API_KEY="your-bedrock-api-key"
   VITE_OPENAI_BASE_URL="https://bedrock-mantle.us-east-1.api.aws/v1"
   ```

### Running the App
Start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to **http://localhost:5173**.

---

## ☁️ Netlify Deployment

Since the application runs 100% on the frontend client side, it can be deployed on Netlify directly:

1. **Netlify Config (`netlify.toml`)**:
   We have added a `netlify.toml` file in the root directory. Netlify automatically reads this file to configure the build command (`npm run build --prefix client`) and public output directory (`client/dist`).
2. **Environment Variables**:
   Vite requires API keys at build-time. Set the following environment variables in your Netlify Dashboard (**Site Settings > Environment Variables**):
   * `VITE_OPENAI_API_KEY`: The Bedrock/OpenAI API key credentials.
   * `VITE_OPENAI_BASE_URL`: The proxy URL (e.g., `https://bedrock-mantle.us-east-1.api.aws/v1`).
3. **Deploy**:
   Import your repository on the Netlify dashboard, configure the variables, and click **Deploy Site**.

