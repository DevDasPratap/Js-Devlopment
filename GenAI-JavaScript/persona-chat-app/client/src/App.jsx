import React, { useState } from 'react';
import OpenAI from 'openai';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import { SYSTEM_PROMPTS, CREATORS } from './personas';
import './App.css';

// Initialize the OpenAI client directly on the browser frontend.
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  baseURL: import.meta.env.VITE_OPENAI_BASE_URL,
  dangerouslyAllowBrowser: true, // Required to use OpenAI SDK inside the browser
});

export default function App() {
  const [creators] = useState(CREATORS);
  const [activePersona, setActivePersona] = useState("hitesh");
  const [conversations, setConversations] = useState({ hitesh: [], piyush: [] });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const activeCreator = creators[activePersona] || CREATORS.hitesh;

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessageText = input.trim();
    setInput("");

    // Append user message to active persona's conversation list
    const currentChat = [...conversations[activePersona], { role: "user", content: userMessageText }];
    setConversations(prev => ({
      ...prev,
      [activePersona]: currentChat
    }));

    setIsLoading(true);

    try {
      // Build messages history payload, prepending the system persona prompt
      const formattedMessages = [
        {
          role: "system",
          content: SYSTEM_PROMPTS[activePersona]
        },
        ...currentChat.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      ];

      // Request chat completion from OpenAI API directly in frontend
      const response = await openai.chat.completions.create({
        model: "openai.gpt-oss-120b",
        messages: formattedMessages,
      });

      const reply = response.choices[0].message.content;

      setConversations(prev => ({
        ...prev,
        [activePersona]: [...currentChat, { role: "assistant", content: reply }]
      }));
    } catch (error) {
      console.error("Failed to generate response:", error);
      setConversations(prev => ({
        ...prev,
        [activePersona]: [...currentChat, { role: "assistant", content: "Error: Failed to fetch response directly from the AI model. Check your browser logs and API status." }]
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestionText) => {
    setInput(suggestionText);
  };

  const handleClearChat = () => {
    setConversations(prev => ({
      ...prev,
      [activePersona]: []
    }));
  };

  return (
    <div className={`app-wrapper ${activeCreator.theme}-theme`}>
      <div className="app-container">
        <Sidebar 
          creators={creators} 
          activePersona={activePersona} 
          setActivePersona={setActivePersona}
          onSuggestionClick={handleSuggestionClick}
        />
        
        <main className="main-content">
          <header className="main-header">
            <div className="header-info">
              <span className="theme-indicator"></span>
              <span>Active Persona: <strong>{activeCreator.name}</strong></span>
            </div>
            <button className="clear-btn" onClick={handleClearChat}>
              Clear Conversation
            </button>
          </header>

          <ChatArea 
            messages={conversations[activePersona]}
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            isLoading={isLoading}
            activeCreator={activeCreator}
          />
        </main>
      </div>
    </div>
  );
}
