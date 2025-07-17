import React, { useState } from 'react';
import './EditorArea.css';

interface Tab {
  id: string;
  title: string;
  content: string;
  isDirty: boolean;
}

interface EditorAreaProps {
  activeApp?: string;
}

const EditorArea: React.FC<EditorAreaProps> = ({ activeApp }) => {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 'welcome',
      title: 'Welcome',
      content: 'Welcome to Marketplace App',
      isDirty: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState('welcome');

  const closeTab = (tabId: string) => {
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  const renderTabContent = () => {
    if (activeApp) {
      return (
        <div className="app-container">
          <div className="app-header">
            <h2>Running App: {activeApp}</h2>
            <button className="close-app-btn" onClick={() => {}}>
              ✕
            </button>
          </div>
          <div className="app-content">
            <iframe
              src="about:blank"
              title={activeApp}
              className="app-iframe"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      );
    }

    const currentTab = tabs.find(tab => tab.id === activeTab);
    
    if (!currentTab) {
      return (
        <div className="empty-editor">
          <div className="empty-content">
            <h2>Welcome to Marketplace App</h2>
            <p>Select an app from the marketplace or explore the project structure.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="editor-content">
        {currentTab.id === 'welcome' ? (
          <div className="welcome-content">
            <h1>🏪 Marketplace Desktop App</h1>
            <div className="welcome-grid">
              <div className="welcome-card">
                <h3>📁 Explorer</h3>
                <p>Browse your project files and structure</p>
              </div>
              <div className="welcome-card">
                <h3>🏪 Marketplace</h3>
                <p>Discover and install new applications</p>
              </div>
              <div className="welcome-card">
                <h3>📱 Apps</h3>
                <p>Manage your installed applications</p>
              </div>
              <div className="welcome-card">
                <h3>⚙️ Settings</h3>
                <p>Customize your experience</p>
              </div>
            </div>
            <div className="recent-section">
              <h3>Recent Activity</h3>
              <ul>
                <li>Project initialized</li>
                <li>VSCode-like interface configured</li>
                <li>Marketplace structure created</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="file-content">
            <pre>{currentTab.content}</pre>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="editor-area">
      {!activeApp && (
        <div className="tab-bar">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-title">
                {tab.title}
                {tab.isDirty && <span className="dirty-indicator">●</span>}
              </span>
              {tabs.length > 1 && (
                <button
                  className="tab-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(tab.id);
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="editor-container">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default EditorArea;