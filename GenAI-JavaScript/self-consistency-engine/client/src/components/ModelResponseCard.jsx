import React from 'react';
import { marked } from 'marked';

export default function ModelResponseCard({ modelName, provider, status, responseText, themeClass }) {
  
  const getParsedHtml = (text) => {
    if (!text) return { __html: "" };
    return { __html: marked.parse(text) };
  };

  return (
    <div className={`model-card ${themeClass} ${status}`}>
      <div className="card-header">
        <div className="model-info">
          <span className="provider-tag">{provider}</span>
          <h3 className="model-title">{modelName}</h3>
        </div>
        <div className={`status-badge ${status}`}>
          <span className="status-dot"></span>
          {status}
        </div>
      </div>
      
      <div className="card-body">
        {status === 'idle' && (
          <div className="empty-state">Awaiting prompt submission...</div>
        )}
        {status === 'loading' && (
          <div className="loader-container">
            <div className="pulse-loader"></div>
            <p>Querying model endpoint...</p>
          </div>
        )}
        {status === 'error' && (
          <div className="error-state">
            <span className="error-icon">⚠️</span>
            <p>Failed to query model. Check connection details.</p>
          </div>
        )}
        {status === 'done' && (
          <div 
            className="response-content animate-fade-in"
            dangerouslySetInnerHTML={getParsedHtml(responseText)}
          />
        )}
      </div>
    </div>
  );
}
