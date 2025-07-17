import React, { useState } from 'react';
import './ChatPanel.css';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai' | 'colleague';
  timestamp: Date;
  senderName?: string;
}

interface ChatPanelProps {
  isVisible: boolean;
  onToggle: () => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ isVisible, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Привет! Я ваш ИИ-помощник. Чем могу помочь?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [chatMode, setChatMode] = useState<'ai' | 'team'>('ai');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: inputValue,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Симуляция ответа ИИ
      if (chatMode === 'ai') {
        setTimeout(() => {
          const aiResponse: Message = {
            id: (Date.now() + 1).toString(),
            content: 'Понял ваш запрос. Работаю над решением...',
            sender: 'ai',
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, aiResponse]);
        }, 1000);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <div className="chat-tabs">
          <button
            className={`chat-tab ${chatMode === 'ai' ? 'active' : ''}`}
            onClick={() => setChatMode('ai')}
          >
            <span className="chat-tab-icon">🤖</span>
            ИИ Помощник
          </button>
          <button
            className={`chat-tab ${chatMode === 'team' ? 'active' : ''}`}
            onClick={() => setChatMode('team')}
          >
            <span className="chat-tab-icon">👥</span>
            Команда
          </button>
        </div>
        <button className="chat-close" onClick={onToggle}>
          ✕
        </button>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="message-content">
              {message.content}
            </div>
            <div className="message-time">
              {message.timestamp.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <div className="chat-input-container">
          <textarea
            className="chat-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={chatMode === 'ai' ? 'Спросите что-нибудь...' : 'Напишите сообщение команде...'}
            rows={1}
          />
          <button
            className="chat-send"
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;