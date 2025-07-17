import React from 'react';
import { useTabStore } from '../../store/tabStore';
import WelcomeView from '../Views/WelcomeView';
import SettingsView from '../Views/SettingsView';
import AccountView from '../Views/AccountView';
import './TabContent.css';

const TabContent: React.FC = () => {
  const { tabs, activeTabId, openTab } = useTabStore();
  
  const activeTab = tabs.find(tab => tab.id === activeTabId);
  
  if (!activeTab) {
    return (
      <div className="tab-content-container">
        <div className="no-active-tab">
          <div className="no-active-tab-content">
            <div className="no-active-tab-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <h3>No active tab</h3>
            <p>Select a tab or create a new one to get started</p>
          </div>
        </div>
      </div>
    );
  }
  
  const handleOpenSettings = () => {
    openTab({
      id: 'settings',
      title: 'Settings',
      type: 'settings',
      closable: true,
      modified: false
    });
  };
  
  const handleOpenAccount = () => {
    openTab({
      id: 'account',
      title: 'Account',
      type: 'account',
      closable: true,
      modified: false
    });
  };
  
  const renderTabContent = () => {
    switch (activeTab.type) {
      case 'welcome':
        return (
          <WelcomeView 
            onOpenSettings={handleOpenSettings}
            onOpenAccount={handleOpenAccount}
          />
        );
      case 'settings':
        return <SettingsView />;
      case 'account':
        return <AccountView />;
      default:
        return (
          <div className="unknown-tab-type">
            <div className="unknown-tab-content">
              <div className="unknown-tab-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
                </svg>
              </div>
              <h3>Unknown tab type</h3>
              <p>The tab type "{activeTab.type}" is not recognized</p>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="tab-content-container">
      <div className="tab-content-wrapper">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabContent;