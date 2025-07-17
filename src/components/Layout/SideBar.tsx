import React from 'react';
import './SideBar.css';

interface SideBarProps {
  activeView: string;
  isVisible: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ activeView, isVisible }) => {
  const renderContent = () => {
    switch (activeView) {
      case 'explorer':
        return (
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>EXPLORER</h3>
            </div>
            <div className="sidebar-body">
              <div className="tree-view">
                <div className="tree-item">📁 Project Root</div>
                <div className="tree-item indent">📁 src</div>
                <div className="tree-item indent">📁 core</div>
                <div className="tree-item indent">📁 apps</div>
                <div className="tree-item indent">📁 server</div>
              </div>
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
            </div>
          </div>
        );
      case 'apps':
        return (
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>INSTALLED APPS</h3>
            </div>
            <div className="sidebar-body">
              <div className="app-list">
                <div className="app-item installed">
                  <div className="app-icon">📝</div>
                  <div className="app-info">
                    <div className="app-name">Text Editor</div>
                    <div className="app-status">Installed</div>
                  </div>
                  <button className="app-action">Open</button>
                </div>
              </div>
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
              <p>Content for {activeView}</p>
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