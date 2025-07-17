import React from 'react';
import './SettingsView.css';

const SettingsView: React.FC = () => {
  return (
    <div className="settings-view">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Customize your workspace preferences</p>
      </div>
      
      <div className="settings-content">
        <div className="settings-section">
          <h2>Appearance</h2>
          <div className="setting-item">
            <label>Theme</label>
            <select>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Font Size</label>
            <input type="number" min="10" max="24" defaultValue="14" />
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Editor</h2>
          <div className="setting-item">
            <label>
              <input type="checkbox" defaultChecked />
              Auto Save
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" defaultChecked />
              Word Wrap
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Minimap
            </label>
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Extensions</h2>
          <div className="setting-item">
            <label>
              <input type="checkbox" defaultChecked />
              Auto Update Extensions
            </label>
          </div>
          <div className="setting-item">
            <label>Extension Marketplace</label>
            <select>
              <option value="official">Official Marketplace</option>
              <option value="custom">Custom Registry</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;