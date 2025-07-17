import React from 'react';
import { getCurrentWindow } from '@tauri-apps/api/window';
import './TitleBar.css';

interface TitleBarProps {
  onToggleRightPanel: () => void;
  isRightPanelOpen: boolean;
  onToggleLeftPanel: () => void;
  isLeftPanelOpen: boolean;
  onToggleBottomPanel?: () => void;
  isBottomPanelOpen?: boolean;
}

const TitleBar: React.FC<TitleBarProps> = ({ 
  onToggleRightPanel, 
  isRightPanelOpen, 
  onToggleLeftPanel, 
  isLeftPanelOpen,
  onToggleBottomPanel,
  isBottomPanelOpen = false
}) => {
  const appWindow = getCurrentWindow();

  const handleClose = async () => {
    await appWindow.close();
  };

  const handleMinimize = async () => {
    await appWindow.minimize();
  };

  const handleMaximize = async () => {
    await appWindow.toggleMaximize();
  };
  return (
    <div className="title-bar">
      <div className="title-bar-left">
        <div className="window-controls">
          <button className="window-control close" onClick={handleClose} title="Close">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
            </svg>
          </button>
          <button className="window-control minimize" onClick={handleMinimize} title="Minimize">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20,14H4V10H20"/>
            </svg>
          </button>
          <button className="window-control maximize" onClick={handleMaximize} title="Maximize">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4,4H20V20H4V4M6,8V18H18V8H6Z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="title-bar-center">
        <span className="app-title">Marketplace Desktop</span>
      </div>
      
      <div className="title-bar-right">
        <div className="panel-controls">
          <button 
            className={`panel-control ${isLeftPanelOpen ? 'active' : ''}`}
            onClick={onToggleLeftPanel}
            title="Toggle Left Panel"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17Z"/>
            </svg>
          </button>
          {onToggleBottomPanel && (
            <button 
              className={`panel-control ${isBottomPanelOpen ? 'active' : ''}`}
              onClick={onToggleBottomPanel}
              title="Toggle Bottom Panel"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,14H4V10H20V14Z"/>
              </svg>
            </button>
          )}
          <button 
            className={`panel-control ${isRightPanelOpen ? 'active' : ''}`}
            onClick={onToggleRightPanel}
            title="Toggle Chat Panel"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6V9M14,14H6V12H14V14Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;