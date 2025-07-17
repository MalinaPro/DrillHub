import React, { useState } from 'react';
import './TabSystem.css';

interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
  isDirty: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
}

interface TabSystemProps {
  tabs: Tab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  onNewTab?: () => void;
}

const TabSystem: React.FC<TabSystemProps> = ({
  tabs,
  activeTabId,
  onTabChange,
  onTabClose,
  onNewTab
}) => {
  const [draggedTab, setDraggedTab] = useState<string | null>(null);

  const handleTabDragStart = (e: React.DragEvent, tabId: string) => {
    setDraggedTab(tabId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', tabId);
  };

  const handleTabDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleTabDrop = (e: React.DragEvent, targetTabId: string) => {
    e.preventDefault();
    const draggedTabId = e.dataTransfer.getData('text/plain');
    
    if (draggedTabId && draggedTabId !== targetTabId) {
      // Здесь можно реализовать перестановку вкладок
      console.log(`Moving tab ${draggedTabId} to position of ${targetTabId}`);
    }
    setDraggedTab(null);
  };

  const handleTabDragEnd = () => {
    setDraggedTab(null);
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="tab-system">
      <div className="tab-bar">
        <div className="tab-list">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTabId === tab.id ? 'active' : ''} ${draggedTab === tab.id ? 'dragging' : ''}`}
              onClick={() => onTabChange(tab.id)}
              draggable
              onDragStart={(e) => handleTabDragStart(e, tab.id)}
              onDragOver={handleTabDragOver}
              onDrop={(e) => handleTabDrop(e, tab.id)}
              onDragEnd={handleTabDragEnd}
            >
              <div className="tab-content">
                {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                <span className="tab-title">
                  {tab.title}
                  {tab.isDirty && <span className="dirty-indicator">●</span>}
                </span>
                {(tab.closable !== false) && (
                  <button
                    className="tab-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTabClose(tab.id);
                    }}
                    title="Close tab"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {onNewTab && (
          <button className="new-tab-button" onClick={onNewTab} title="New tab">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 4v4H4v1h4v4h1V9h4V8H9V4H8z"/>
            </svg>
          </button>
        )}
        <div className="tab-actions">
          <button className="tab-action" title="Split editor">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1 1v14h14V1H1zm13 13H8V2h6v12zM2 2h5v12H2V2z"/>
            </svg>
          </button>
          <button className="tab-action" title="More actions">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM14 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="tab-content-area">
        {activeTab ? activeTab.content : (
          <div className="empty-tab-content">
            <div className="empty-message">
              <h3>No tab selected</h3>
              <p>Select a tab to view its content</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSystem;