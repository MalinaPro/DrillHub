import React from 'react';
import './RightPanel.css';

interface RightPanelProps {
  isOpen: boolean;
}

const RightPanel: React.FC<RightPanelProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="right-panel">
      <div className="right-panel-header">
        <div className="panel-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
          <span>CHAT</span>
        </div>
      </div>
      
      <div className="right-panel-content">
        <div className="chat-container">
          <div className="chat-header">
            <h3>AI Assistant</h3>
            <div className="chat-status">
              <div className="status-indicator online"></div>
              <span>Online</span>
            </div>
          </div>
          
          <div className="chat-messages">
            <div className="message assistant">
              <div className="message-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="message-content">
                <div className="message-text">
                  Привет! Я ваш AI-помощник. Чем могу помочь?
                </div>
                <div className="message-time">Сейчас</div>
              </div>
            </div>
          </div>
          
          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <input 
                type="text" 
                className="chat-input" 
                placeholder="Напишите сообщение..."
              />
              <button className="send-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;