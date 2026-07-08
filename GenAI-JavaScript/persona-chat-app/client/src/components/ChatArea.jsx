import React, { useRef, useEffect } from 'react';

export default function ChatArea({ 
  messages, 
  input, 
  setInput, 
  handleSend, 
  isLoading, 
  activeCreator 
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // A very simple custom formatter to parse basic backticks for inline code & pre block code
  const formatMessageContent = (text) => {
    if (!text) return "";
    
    // Split by code blocks (```)
    const blocks = text.split(/```/g);
    return blocks.map((block, i) => {
      // Odd indices are code blocks
      if (i % 2 === 1) {
        // Extract language if present
        const lines = block.split('\n');
        const firstLine = lines[0].trim();
        const codeLines = lines.slice(1).join('\n');
        
        return (
          <pre key={i} className="code-block-container">
            {firstLine && <div className="code-lang">{firstLine}</div>}
            <code className="hljs-code">{codeLines || block}</code>
          </pre>
        );
      }
      
      // Handle inline code `code`
      const inlineParts = block.split(/`(.*?)`/g);
      return (
        <span key={i}>
          {inlineParts.map((part, j) => {
            if (j % 2 === 1) {
              return <code key={j} className="inline-code">{part}</code>;
            }
            // Standard text split by newlines for paragraph separation
            return part.split('\n').map((line, k) => (
              <React.Fragment key={k}>
                {line}
                {k < part.split('\n').length - 1 && <br />}
              </React.Fragment>
            ));
          })}
        </span>
      );
    });
  };

  return (
    <div className="chat-container">
      {/* Active Creator Profile Bar */}
      <div className="creator-profile-bar">
        <div className="profile-info">
          <div className="avatar-placeholder">
            {activeCreator.name[0]}
          </div>
          <div>
            <h3 className="profile-name">{activeCreator.name}</h3>
            <p className="profile-status">Online • AI Simulator</p>
          </div>
        </div>
      </div>

      {/* Messages Scrolling Area */}
      <div className="messages-area">
        {messages.length === 0 ? (
          <div className="welcome-container animate-fade-in">
            <div className="welcome-icon">💬</div>
            <h2>Start your conversation with {activeCreator.name}</h2>
            <p>Ask anything about coding, career growth, tech stacks, or backend systems!</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`message-bubble-wrapper ${msg.role}`}>
              <div className={`message-bubble ${msg.role}`}>
                {msg.role === 'assistant' && (
                  <div className="message-sender">{activeCreator.name}</div>
                )}
                <div className="message-text">
                  {formatMessageContent(msg.content)}
                </div>
              </div>
            </div>
          ))
        )}

        {/* Loading typing bubble */}
        {isLoading && (
          <div className="message-bubble-wrapper assistant">
            <div className="message-bubble assistant typing">
              <div className="message-sender">{activeCreator.name}</div>
              <div className="typing-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Bar */}
      <form onSubmit={handleSend} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${activeCreator.name}...`}
          disabled={isLoading}
          className="chat-input"
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()} 
          className="send-btn"
        >
          Send
        </button>
      </form>
    </div>
  );
}
