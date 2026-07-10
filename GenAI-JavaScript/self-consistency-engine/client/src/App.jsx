import React, { useState } from 'react';
import OpenAI from 'openai';
import ModelResponseCard from './components/ModelResponseCard';
import EvaluatorCard from './components/EvaluatorCard';
import './App.css';

// Initialize the OpenAI client directly on the browser frontend.
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  baseURL: import.meta.env.VITE_OPENAI_BASE_URL,
  dangerouslyAllowBrowser: true, // Required to use OpenAI SDK inside the browser
});

// Target models configured in the Bedrock Proxy
const MODELS = {
  gpt: {
    id: "openai.gpt-oss-120b",
    name: "GPT-OSS 120B",
    provider: "OpenAI",
    theme: "openai-theme"
  },
  gemma: {
    id: "google.gemma-3-27b-it",
    name: "Gemma 3 27B",
    provider: "Google",
    theme: "gemma-theme"
  },
  deepseek: {
    id: "mistral.mistral-large-3-675b-instruct",
    name: "Mistral Large 3",
    provider: "Mistral",
    theme: "deepseek-theme"
  },
  evaluator: {
    id: "mistral.mistral-large-3-675b-instruct",
    name: "Mistral Large 3",
    provider: "Mistral"
  }
};

const SUGGESTIONS = [
  "What is the difference between vertical and horizontal scaling in databases?",
  "How does public-key cryptography work in simple terms?",
  "Write a highly optimized quicksort algorithm in JavaScript."
];

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [loadingStep, setLoadingStep] = useState("idle"); // idle | querying | synthesizing | done | error
  
  // Individual model response states
  const [responses, setResponses] = useState({
    gpt: { status: "idle", text: "" },
    gemma: { status: "idle", text: "" },
    deepseek: { status: "idle", text: "" }
  });
  
  // Evaluator final answer state
  const [evaluation, setEvaluation] = useState({ status: "idle", text: "" });

  const handleSuggestionClick = (text) => {
    setPrompt(text);
  };

  const handleClear = () => {
    setPrompt("");
    setLoadingStep("idle");
    setResponses({
      gpt: { status: "idle", text: "" },
      gemma: { status: "idle", text: "" },
      deepseek: { status: "idle", text: "" }
    });
    setEvaluation({ status: "idle", text: "" });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || loadingStep === 'querying' || loadingStep === 'synthesizing') return;

    // Reset states
    setLoadingStep("querying");
    setResponses({
      gpt: { status: "loading", text: "" },
      gemma: { status: "loading", text: "" },
      deepseek: { status: "loading", text: "" }
    });
    setEvaluation({ status: "idle", text: "" });

    // Function to run a single model completion call
    const runModelQuery = async (modelKey, modelId) => {
      try {
        const completion = await openai.chat.completions.create({
          model: modelId,
          messages: [{ role: "user", content: prompt.trim() }],
        });
        const reply = completion.choices[0].message.content || completion.choices[0].message.reasoning || "";
        setResponses(prev => ({
          ...prev,
          [modelKey]: { status: "done", text: reply }
        }));
        return reply;
      } catch (err) {
        console.error(`Failed to query model ${modelKey}:`, err);
        setResponses(prev => ({
          ...prev,
          [modelKey]: { status: "error", text: "" }
        }));
        throw err;
      }
    };

    // Run the three queries in parallel
    const modelPromises = [
      runModelQuery("gpt", MODELS.gpt.id),
      runModelQuery("gemma", MODELS.gemma.id),
      runModelQuery("deepseek", MODELS.deepseek.id)
    ];

    const results = await Promise.allSettled(modelPromises);
    
    // Check if at least one model succeeded
    const successfulResponses = [];
    results.forEach((res, index) => {
      if (res.status === 'fulfilled') {
        const modelKeys = ["gpt", "gemma", "deepseek"];
        const modelKey = modelKeys[index];
        successfulResponses.push({
          modelName: MODELS[modelKey].name,
          reply: res.value
        });
      }
    });

    if (successfulResponses.length === 0) {
      setLoadingStep("error");
      setEvaluation({ status: "error", text: "" });
      return;
    }

    // Begin Synthesis Step
    setLoadingStep("synthesizing");
    setEvaluation({ status: "loading", text: "" });

    try {
      // Build the prompt for the evaluator
      const modelOutputsBlock = successfulResponses.map(item => (
        `=== Response from Model: ${item.modelName} ===\n${item.reply}\n====================================`
      )).join('\n\n');

      const evaluationSystemPrompt = `
You are the Final Evaluator in a Consensus / Self-Consistency Answer Engine. 
You are given a user prompt and responses from multiple separate AI models.

Your task is to:
1. Compare and analyze the responses.
2. Identify the strongest, most accurate, and most practical elements of each response.
3. Resolve any errors, omissions, or discrepancies.
4. Synthesize a single, highly refined "Consensus Answer" that represents the best possible combination of insights.

Output format rules:
- You must output your response wrapped exactly in <consensus> and <insights> tags.
- Inside <consensus>...</consensus>, provide the clean, polished final answer. Do not mention other models here; write it directly as a direct, refined response to the user.
- Inside <insights>...</insights>, provide a short analysis detailing:
  - What each model contributed (e.g. "GPT-OSS provided the best code framework", "Gemma highlighted key scaling tradeoffs").
  - How discrepancies were resolved.
  - Why the final consensus answer is superior.
`;

      const evaluatorPayload = `
USER PROMPT:
${prompt.trim()}

MODEL OUTPUTS:
${modelOutputsBlock}
`;

      const completion = await openai.chat.completions.create({
        model: MODELS.evaluator.id,
        messages: [
          { role: "system", content: evaluationSystemPrompt },
          { role: "user", content: evaluatorPayload }
        ]
      });

      const reply = completion.choices[0].message.content || completion.choices[0].message.reasoning || "";
      setEvaluation({ status: "done", text: reply });
      setLoadingStep("done");
    } catch (err) {
      console.error("Evaluation synthesis failed:", err);
      setEvaluation({ status: "error", text: "" });
      setLoadingStep("error");
    }
  };

  return (
    <div className="engine-wrapper">
      <div className="engine-container">
        
        {/* Header */}
        <header className="header-section">
          <h1 className="main-title">Consensus AI</h1>
          <p className="subtitle">
            An advanced self-consistency synthesis engine. We query OpenAI, Google Gemma, and DeepSeek in parallel, then coordinate with Anthropic Claude to analyze, refine, and output a single superior response.
          </p>
        </header>

        {/* Input Form Card */}
        <section className="input-section">
          <form onSubmit={handleSubmit} className="prompt-form">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt or technical question here..."
              disabled={loadingStep === 'querying' || loadingStep === 'synthesizing'}
              className="prompt-input"
            />
            <button
              type="submit"
              disabled={!prompt.trim() || loadingStep === 'querying' || loadingStep === 'synthesizing'}
              className="submit-btn"
            >
              Synthesize
            </button>
          </form>

          <div className="sample-suggestions">
            <span className="suggestions-label">Try asking:</span>
            {SUGGESTIONS.map((text, idx) => (
              <button
                key={idx}
                className="suggestion-tag"
                onClick={() => handleSuggestionClick(text)}
                disabled={loadingStep === 'querying' || loadingStep === 'synthesizing'}
              >
                {text.length > 50 ? `${text.slice(0, 50)}...` : text}
              </button>
            ))}
            {prompt && (
              <button className="clear-btn" onClick={handleClear} type="button">
                Clear
              </button>
            )}
          </div>

          {/* Progress Indicators */}
          {loadingStep !== 'idle' && (
            <div className="progress-steps">
              <div className={`step-item ${loadingStep === 'querying' ? 'active' : ''} ${['synthesizing', 'done'].includes(loadingStep) ? 'completed' : ''}`}>
                <span className="step-indicator"></span>
                <span>1. Parallel Queries</span>
              </div>
              <div className={`step-item ${loadingStep === 'synthesizing' ? 'active' : ''} ${loadingStep === 'done' ? 'completed' : ''}`}>
                <span className="step-indicator"></span>
                <span>2. Claude Synthesis</span>
              </div>
            </div>
          )}
        </section>

        {/* Dashboard Split Layout */}
        <div className="dashboard-layout">
          
          {/* Left Column: Synthesized Consensus */}
          <section className="synthesis-section">
            <EvaluatorCard
              status={evaluation.status}
              rawResponseText={evaluation.text}
            />
          </section>

          {/* Right Column: Individual Model Sources */}
          <section className="sources-panel">
            <h2 className="sources-header">Model Source Comparison</h2>
            
            <ModelResponseCard
              modelName={MODELS.gpt.name}
              provider={MODELS.gpt.provider}
              status={responses.gpt.status}
              responseText={responses.gpt.text}
              themeClass={MODELS.gpt.theme}
            />
            <ModelResponseCard
              modelName={MODELS.gemma.name}
              provider={MODELS.gemma.provider}
              status={responses.gemma.status}
              responseText={responses.gemma.text}
              themeClass={MODELS.gemma.theme}
            />
            <ModelResponseCard
              modelName={MODELS.deepseek.name}
              provider={MODELS.deepseek.provider}
              status={responses.deepseek.status}
              responseText={responses.deepseek.text}
              themeClass={MODELS.deepseek.theme}
            />
          </section>

        </div>

      </div>
    </div>
  );
}
