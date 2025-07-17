import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToHorizontalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';
import { useTabStore } from '../../store/tabStore';
import SortableTab from './SortableTab';
import TabContent from './TabContent';
import './TabContainer.css';

const TabContainer: React.FC = () => {
  const { tabs, activeTabId, reorderTabs } = useTabStore();
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = tabs.findIndex((tab) => tab.id === active.id);
      const newIndex = tabs.findIndex((tab) => tab.id === over?.id);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const newTabs = arrayMove(tabs, oldIndex, newIndex);
        reorderTabs(newTabs);
      }
    }
  };

  if (tabs.length === 0) {
    return (
      <div className="tab-container">
        <div className="empty-tabs">
          <div className="empty-tabs-content">
            <div className="empty-tabs-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <h3>No tabs open</h3>
            <p>Open a file or create a new tab to get started</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tab-container">
      <div className="tab-bar">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToHorizontalAxis, restrictToParentElement]}
        >
          <SortableContext
            items={tabs.map(tab => tab.id)}
            strategy={horizontalListSortingStrategy}
          >
            <div className="tab-list">
              {tabs.map((tab) => (
                <SortableTab
                  key={tab.id}
                  tab={tab}
                  isActive={tab.id === activeTabId}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
      
      <div className="tab-content-area">
        <TabContent />
      </div>
    </div>
  );
};

export default TabContainer;