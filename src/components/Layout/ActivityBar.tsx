import React from 'react';
import './ActivityBar.css';

interface ActivityBarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onChatToggle: () => void;
  isChatVisible: boolean;
  onOpenInEditor: (type: 'settings' | 'account', title: string) => void;
}

const ActivityBar: React.FC<ActivityBarProps> = ({ activeView, onViewChange, onChatToggle, isChatVisible, onOpenInEditor }) => {
  const topViews = [
    {
      id: 'explorer',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h7l2 2h9a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
        </svg>
      ),
      title: 'Dashboard',
    },
    {
      id: 'search',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/>
        </svg>
      ),
      title: 'Search',
    },
    {
      id: 'marketplace',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Marketplace',
    },
  ];

  const bottomViews = [
    {
      id: 'account',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/>
        </svg>
      ),
      title: 'Account',
    },
    {
      id: 'settings',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>
          <path d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0 0-5.42L21.07 7.17a1 1 0 0 0 0-1.41l-2.83-2.83a1 1 0 0 0-1.41 0L14.71 5a3.08 3.08 0 0 0-5.42 0L7.17 2.93a1 1 0 0 0-1.41 0L2.93 5.76a1 1 0 0 0 0 1.41L5 9.29a3.08 3.08 0 0 0 0 5.42L2.93 16.83a1 1 0 0 0 0 1.41l2.83 2.83a1 1 0 0 0 1.41 0L9.29 19a3.08 3.08 0 0 0 5.42 0l2.12 2.12a1 1 0 0 0 1.41 0l2.83-2.83a1 1 0 0 0 0-1.41z"/>
        </svg>
      ),
      title: 'Settings',
    },
  ];

  return (
    <div className="activity-bar">
      <div className="activity-top">
        {topViews.map((view) => (
          <button
            key={view.id}
            className={`activity-bar-item ${activeView === view.id ? 'active' : ''}`}
            onClick={() => onViewChange(view.id)}
            title={view.title}
          >
            {view.icon}
          </button>
        ))}
      </div>
      
      <div className="activity-bottom">
        {bottomViews.map((view) => (
          <button
            key={view.id}
            className="activity-bar-item"
            onClick={() => onOpenInEditor(view.id as 'settings' | 'account', view.title)}
            title={view.title}
          >
            {view.icon}
          </button>
        ))}
        <button
          className={`activity-bar-item chat-toggle ${isChatVisible ? "active" : ""}`}
          onClick={onChatToggle}
          title="Chat"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ActivityBar;