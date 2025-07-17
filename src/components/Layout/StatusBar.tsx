import React from 'react';
import { useTabStore } from '../../store/tabStore';
import './StatusBar.css';

interface StatusBarProps {
  projectName: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ projectName }) => {
  const { tabs, activeTabId, openTab } = useTabStore();
  const activeTab = tabs.find(tab => tab.id === activeTabId);
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="status-bar">
      <div className="status-left">
        <div className="status-item">
          <span className="status-icon">📁</span>
          <span>{projectName}</span>
        </div>
        {activeTab && activeTab.type !== 'welcome' && (
          <div className="status-item">
            <span className="status-icon">📱</span>
            <span>Active: {activeTab.title}</span>
          </div>
        )}
        <div className="status-item">
          <span className="status-icon">📄</span>
          <span>{tabs.length} tab{tabs.length !== 1 ? 's' : ''}</span>
        </div>
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
        <div 
          className="status-item clickable"
          onClick={() => openTab({
            id: 'settings',
            title: 'Settings',
            type: 'settings',
            closable: true,
            modified: false
          })}
        >
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