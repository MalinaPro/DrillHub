import React from 'react';
import './ActivityBar.css';

interface ActivityBarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const ActivityBar: React.FC<ActivityBarProps> = ({ activeView, onViewChange }) => {
  const views = [
    { id: 'explorer', icon: '📁', title: 'Explorer' },
    { id: 'search', icon: '🔍', title: 'Search' },
    { id: 'marketplace', icon: '🏪', title: 'Marketplace' },
    { id: 'apps', icon: '📱', title: 'Apps' },
    { id: 'settings', icon: '⚙️', title: 'Settings' },
  ];

  return (
    <div className="activity-bar">
      {views.map((view) => (
        <button
          key={view.id}
          className={`activity-bar-item ${activeView === view.id ? 'active' : ''}`}
          onClick={() => onViewChange(view.id)}
          title={view.title}
        >
          <span className="activity-bar-icon">{view.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default ActivityBar;