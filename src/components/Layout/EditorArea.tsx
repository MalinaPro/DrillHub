import React, { useState } from 'react';
import TabSystem from './TabSystem';
import './EditorArea.css';

interface EditorTab {
  id: string;
  title: string;
  content: React.ReactNode;
  isDirty: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
}

interface EditorAreaProps {
  activeApp?: string;
}

const EditorArea: React.FC<EditorAreaProps> = ({ activeApp }) => {
  
  // Функция для создания контента настроек
  const createSettingsContent = () => (
    <div className="app-content">
      <div className="app-header">
        <h1>⚙️ Settings</h1>
        <p>Configure your application preferences</p>
      </div>
      <div className="settings-grid">
        <div className="setting-group">
          <h3>Appearance</h3>
          <div className="setting-item">
            <label>Theme</label>
            <select>
              <option>Dark</option>
              <option>Light</option>
              <option>Auto</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Font Size</label>
            <input type="range" min="12" max="20" defaultValue="14" />
          </div>
        </div>
        <div className="setting-group">
          <h3>Editor</h3>
          <div className="setting-item">
            <label>Auto Save</label>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="setting-item">
            <label>Word Wrap</label>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
  
  // Функция для создания контента аккаунта
  const createAccountContent = () => (
    <div className="app-content">
      <div className="app-header">
        <h1>👤 Account</h1>
        <p>Manage your profile and account settings</p>
      </div>
      <div className="account-info">
        <div className="profile-section">
          <div className="avatar">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
            </svg>
          </div>
          <div className="profile-info">
            <h3>John Doe</h3>
            <p>john.doe@example.com</p>
            <button className="btn-primary">Edit Profile</button>
          </div>
        </div>
        <div className="account-stats">
          <div className="stat-item">
            <h4>Apps Installed</h4>
            <span>12</span>
          </div>
          <div className="stat-item">
            <h4>Storage Used</h4>
            <span>2.4 GB</span>
          </div>
          <div className="stat-item">
            <h4>Last Sync</h4>
            <span>2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
  const [tabs, setTabs] = useState<EditorTab[]>([
    {
      id: 'welcome',
      title: 'Welcome',
      content: (
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
              <h3>👤 Account</h3>
              <p>Manage your profile and sync settings</p>
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
              <li>Tab system implemented</li>
            </ul>
          </div>
        </div>
      ),
      isDirty: false,
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
      closable: true,
    },
  ]);
  const [activeTab, setActiveTab] = useState('welcome');
  
  // Добавляем вкладки для настроек и аккаунта при необходимости
  React.useEffect(() => {
    if (activeApp === 'settings') {
      const settingsTab: EditorTab = {
        id: 'settings',
        title: 'Settings',
        content: createSettingsContent(),
        isDirty: false,
        icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>,
        closable: true
      };
      
      setTabs(prevTabs => {
        const existingTab = prevTabs.find(tab => tab.id === 'settings');
        if (!existingTab) {
          return [...prevTabs, settingsTab];
        }
        return prevTabs;
      });
      setActiveTab('settings');
    }
    
    if (activeApp === 'account') {
      const accountTab: EditorTab = {
        id: 'account',
        title: 'Account',
        content: createAccountContent(),
        isDirty: false,
        icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg>,
        closable: true
      };
      
      setTabs(prevTabs => {
        const existingTab = prevTabs.find(tab => tab.id === 'account');
        if (!existingTab) {
          return [...prevTabs, accountTab];
        }
        return prevTabs;
      });
      setActiveTab('account');
    }
  }, [activeApp, tabs]);

  const closeTab = (tabId: string) => {
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  const addNewTab = () => {
    const newTabId = `file-${Date.now()}`;
    const newTab: EditorTab = {
      id: newTabId,
      title: 'Untitled',
      content: (
        <div className="file-content">
          <div className="editor-placeholder">
            <h3>New File</h3>
            <p>Start typing to create a new file...</p>
            <textarea 
              className="simple-editor" 
              placeholder="// Start coding here..."
              rows={20}
            />
          </div>
        </div>
      ),
      isDirty: false,
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/></svg>,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTabId);
  };

  if (activeApp) {
    return (
      <div className="editor-area">
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
      </div>
    );
  }

  return (
    <div className="editor-area">
      <TabSystem
        tabs={tabs}
        activeTabId={activeTab}
        onTabChange={setActiveTab}
        onTabClose={closeTab}
        onNewTab={addNewTab}
      />
    </div>
  );
};

export default EditorArea;