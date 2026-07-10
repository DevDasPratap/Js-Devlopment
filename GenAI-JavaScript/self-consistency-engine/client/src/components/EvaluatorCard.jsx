import React, { useState } from 'react';
import { marked } from 'marked';

export default function EvaluatorCard({ status, rawResponseText }) {
  const [activeTab, setActiveTab] = useState('consensus');

  // Helper to extract tag contents
  const extractTagContent = (text, tag) => {
    if (!text) return "";
    const regex = new RegExp(`<${tag}>([\\s\\S]*?)<\/${tag}>`, 'i');
    const match = text.match(regex);
    return match ? match[1].trim() : "";
  };

  const getParsedHtml = (text) => {
    if (!text) return { __html: "" };
    return { __html: marked.parse(text) };
  };

  // Extract sections
  const consensusText = extractTagContent(rawResponseText, 'consensus') || rawResponseText;
  const insightsText = extractTagContent(rawResponseText, 'insights');

  return (
    <div className={`evaluator-card ${status}`}>
      <div className="eval-header">
        <div className="eval-info">
          <span className="eval-provider">Anthropic Claude</span>
          <h2 className="eval-title">Consensus AI Synthesis Engine</h2>
        </div>
        {status === 'done' && (
          <div className="eval-tabs">
            <button 
              className={`tab-btn ${activeTab === 'consensus' ? 'active' : ''}`}
              onClick={() => setActiveTab('consensus')}
            >
              Consensus Answer
            </button>
            {insightsText && (
              <button 
                className={`tab-btn ${activeTab === 'insights' ? 'active' : ''}`}
                onClick={() => setActiveTab('insights')}
              >
                Synthesis Insights
              </button>
            )}
          </div>
        )}
      </div>

      <div className="eval-body">
        {status === 'idle' && (
          <div className="eval-empty-state">
            <span className="brain-icon">🧠</span>
            <p>Once all parallel models respond, Claude will evaluate and synthesize the final answer here.</p>
          </div>
        )}
        
        {status === 'loading' && (
          <div className="eval-loader-container">
            <div className="gears-loader">
              <span className="gear gear-1">⚙️</span>
              <span className="gear gear-2">⚙️</span>
            </div>
            <p>Analyzing model outputs, resolving discrepancies, and generating consensus...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="eval-error-state">
            <span className="error-icon">⚠️</span>
            <p>Synthesis engine failed. Ensure model completion was successful.</p>
          </div>
        )}

        {status === 'done' && (
          <div className="eval-response-area animate-fade-in">
            {activeTab === 'consensus' ? (
              <div 
                className="consensus-output"
                dangerouslySetInnerHTML={getParsedHtml(consensusText)}
              />
            ) : (
              <div 
                className="insights-output"
                dangerouslySetInnerHTML={getParsedHtml(insightsText)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
