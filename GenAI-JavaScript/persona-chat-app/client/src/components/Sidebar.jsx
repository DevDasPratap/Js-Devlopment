import React from 'react';

export default function Sidebar({ creators, activePersona, setActivePersona, onSuggestionClick }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo-title">Creator AI</h1>
        <p className="logo-subtitle">Persona Chat Simulator</p>
      </div>

      <div className="creator-list">
        {Object.entries(creators).map(([key, creator]) => {
          const isActive = activePersona === key;
          return (
            <div
              key={key}
              className={`creator-card ${key} ${isActive ? 'active' : ''}`}
              onClick={() => setActivePersona(key)}
            >
              <div className="creator-badge">
                <span className="badge-dot"></span>
                {creator.theme === 'chai' ? 'Chai aur Code' : 'Hello World'}
              </div>
              <h2 className="creator-name">{creator.name}</h2>
              <p className="creator-role">{creator.role}</p>
              <p className="creator-intro">"{creator.intro}"</p>
            </div>
          );
        })}
      </div>

      {activePersona && creators[activePersona] && (
        <div className="persona-info-section animate-fade-in">
          <h3 className="section-title">Focus Areas</h3>
          <div className="topics-container">
            {creators[activePersona].topics.map((topic, index) => (
              <span key={index} className="topic-tag">
                {topic}
              </span>
            ))}
          </div>

          <h3 className="section-title">Ask Suggestions</h3>
          <div className="suggestions-container">
            {creators[activePersona].suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="suggestion-btn"
                onClick={() => onSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
