import React, { useState } from 'react';
import './SideBar.css';

interface SideBarProps {
  activeView: string;
  isVisible: boolean;
  onOpenInEditor: (type: 'settings' | 'account', title: string) => void;
}

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children, defaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="collapsible-section">
      <div className="section-header" onClick={() => setIsExpanded(!isExpanded)}>
        <span className={`chevron ${isExpanded ? 'expanded' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 4l4 4-4 4V4z"/>
          </svg>
        </span>
        <span className="section-title">{title}</span>
      </div>
      {isExpanded && (
        <div className="section-content">
          {children}
        </div>
      )}
    </div>
  );
};

const SideBar: React.FC<SideBarProps> = ({ activeView, isVisible, onOpenInEditor }) => {
  const renderContent = () => {
    switch (activeView) {
      case 'explorer':
        return (
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>EXPLORER</h3>
            </div>
            <div className="sidebar-body">
              <CollapsibleSection title="DRILLHUB" defaultExpanded={true}>
                <div className="tree-view">
                  <div className="tree-item">📁 src</div>
                  <div className="tree-item indent">📁 components</div>
                  <div className="tree-item indent">📄 App.tsx</div>
                  <div className="tree-item indent">📄 main.tsx</div>
                  <div className="tree-item">📁 core</div>
                  <div className="tree-item indent">📁 config</div>
                  <div className="tree-item indent">📁 services</div>
                  <div className="tree-item">📁 apps</div>
                  <div className="tree-item">📁 server</div>
                  <div className="tree-item">📄 package.json</div>
                  <div className="tree-item">📄 README.md</div>
                </div>
              </CollapsibleSection>
              <CollapsibleSection title="OUTLINE" defaultExpanded={false}>
                <div className="outline-content">
                  <div className="outline-item">🔧 Functions</div>
                  <div className="outline-item">📦 Components</div>
                  <div className="outline-item">🎯 Variables</div>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        );
      case 'marketplace':
        return (
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>MARKETPLACE</h3>
            </div>
            <div className="sidebar-body">
              <div className="marketplace-search">
                <input type="text" placeholder="Search apps..." className="search-input" />
              </div>
              <CollapsibleSection title="FEATURED" defaultExpanded={true}>
                <div className="app-list">
                  <div className="app-item">
                    <div className="app-icon">📝</div>
                    <div className="app-info">
                      <div className="app-name">Text Editor</div>
                      <div className="app-description">Simple text editor</div>
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-icon">🎨</div>
                    <div className="app-info">
                      <div className="app-name">Image Viewer</div>
                      <div className="app-description">View and edit images</div>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>
              <CollapsibleSection title="CATEGORIES" defaultExpanded={false}>
                <div className="category-list">
                  <div className="category-item">🛠️ Development</div>
                  <div className="category-item">🎨 Design</div>
                  <div className="category-item">📊 Productivity</div>
                  <div className="category-item">🎮 Games</div>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        );
      case 'account':
        return (
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>ACCOUNT</h3>
            </div>
            <div className="sidebar-body">
              <CollapsibleSection title="PROFILE" defaultExpanded={true}>
                <div className="profile-info">
                  <div className="profile-avatar">👤</div>
                  <div className="profile-details">
                    <div className="profile-name">User Name</div>
                    <div className="profile-email">user@example.com</div>
                  </div>
                </div>
              </CollapsibleSection>
              <CollapsibleSection title="ACCOUNT MANAGEMENT" defaultExpanded={true}>
                <div className="settings-group">
                  <button 
                    className="setting-button"
                    onClick={() => onOpenInEditor('account', 'Account Settings')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/>
                    </svg>
                    <span>Manage Account</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="arrow">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                </div>
              </CollapsibleSection>
              <CollapsibleSection title="SYNC" defaultExpanded={false}>
                <div className="sync-options">
                  <div className="sync-item">⚙️ Settings Sync</div>
                  <div className="sync-item">📁 Files Sync</div>
                  <div className="sync-item">🔌 Extensions Sync</div>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>SETTINGS</h3>
            </div>
            <div className="sidebar-body">
              <CollapsibleSection title="QUICK ACTIONS" defaultExpanded={true}>
                <div className="settings-group">
                  <button 
                    className="setting-button"
                    onClick={() => onOpenInEditor('account', 'Account')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/>
                    </svg>
                    <span>Open Account</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="arrow">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                  <button 
                    className="setting-button"
                    onClick={() => onOpenInEditor('settings', 'Settings')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>
                      <path d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0 0-5.42L21.07 7.17a1 1 0 0 0 0-1.41l-2.83-2.83a1 1 0 0 0-1.41 0L14.71 5a3.08 3.08 0 0 0-5.42 0L7.17 2.93a1 1 0 0 0-1.41 0L2.93 5.76a1 1 0 0 0 0 1.41L5 9.29a3.08 3.08 0 0 0 0 5.42L2.93 16.83a1 1 0 0 0 0 1.41l2.83 2.83a1 1 0 0 0 1.41 0L9.29 19a3.08 3.08 0 0 0 5.42 0l2.12 2.12a1 1 0 0 0 1.41 0l2.83-2.83a1 1 0 0 0 0-1.41z"/>
                    </svg>
                    <span>Open Settings</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="arrow">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                </div>
              </CollapsibleSection>
              <CollapsibleSection title="PREFERENCES" defaultExpanded={false}>
                <div className="settings-group">
                  <div className="setting-item">🎨 Theme</div>
                  <div className="setting-item">🔤 Font Size</div>
                  <div className="setting-item">📐 Layout</div>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        );
      default:
        return (
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>{activeView.toUpperCase()}</h3>
            </div>
            <div className="sidebar-body">
              <CollapsibleSection title="CONTENT" defaultExpanded={true}>
                <p>Content for {activeView}</p>
              </CollapsibleSection>
            </div>
          </div>
        );
    }
  };

  if (!isVisible) return null;

  return (
    <div className="sidebar">
      {renderContent()}
    </div>
  );
};

export default SideBar;