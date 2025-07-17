import React from 'react';
import './StatusBar.css';

interface StatusBarProps {
  activeApp?: string;
  projectName: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ activeApp, projectName }) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="status-bar">
      <div className="status-left">
        <div className="status-item">
          <span className="status-icon">📁</span>
          <span>{projectName}</span>
        </div>
        {activeApp && (
          <div className="status-item">
            <span className="status-icon">📱</span>
            <span>Running: {activeApp}</span>
          </div>
        )}
        <div className="status-item">
          <span className="status-icon">🔗</span>
          <span>Connected</span>
        </div>
      </div>
      
      <div className="status-center">
        <div className="status-item">
          <span>Ready</span>
        </div>
      </div>
      
      <div className="status-right">
        <div className="status-item clickable">
          <span className="status-icon">⚙️</span>
          <span>Settings</span>
        </div>
        <div className="status-item">
          <span className="status-icon">🕐</span>
          <span>{currentTime}</span>
        </div>
        <div className="status-item clickable">
          <span className="status-icon">🌙</span>
          <span>Dark</span>
        </div>
        <div className="status-item">
          <span className="status-icon">📊</span>
          <span>Tauri</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;