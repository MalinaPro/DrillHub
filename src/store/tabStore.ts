import { create } from 'zustand';
import React from 'react';

export interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
  isDirty: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
  type?: 'welcome' | 'settings' | 'account' | 'editor' | 'other';
}

interface TabState {
  tabs: Tab[];
  activeTabId: string | null;
  addTab: (tab: Tab) => void;
  removeTab: (tabId: string) => void;
  setActiveTab: (tabId: string) => void;
  updateTab: (tabId: string, updates: Partial<Tab>) => void;
  reorderTabs: (activeId: string, overId: string) => void;
  openOrFocusTab: (tab: Omit<Tab, 'isDirty'>) => void;
}

export const useTabStore = create<TabState>((set, get) => ({
  tabs: [
    {
      id: 'welcome',
      title: 'Welcome',
      content: null, // Will be set later
      isDirty: false,
      closable: true,
      type: 'welcome',
      icon: null
    }
  ],
  activeTabId: 'welcome',
  
  addTab: (tab) => set((state) => {
    const existingTab = state.tabs.find(t => t.id === tab.id);
    if (existingTab) {
      return { activeTabId: tab.id };
    }
    return {
      tabs: [...state.tabs, { ...tab, isDirty: false }],
      activeTabId: tab.id
    };
  }),
  
  removeTab: (tabId) => set((state) => {
    const newTabs = state.tabs.filter(tab => tab.id !== tabId);
    let newActiveTabId = state.activeTabId;
    
    if (state.activeTabId === tabId) {
      if (newTabs.length > 0) {
        const currentIndex = state.tabs.findIndex(tab => tab.id === tabId);
        const nextIndex = Math.min(currentIndex, newTabs.length - 1);
        newActiveTabId = newTabs[nextIndex]?.id || null;
      } else {
        newActiveTabId = null;
      }
    }
    
    return {
      tabs: newTabs,
      activeTabId: newActiveTabId
    };
  }),
  
  setActiveTab: (tabId) => set({ activeTabId: tabId }),
  
  updateTab: (tabId, updates) => set((state) => ({
    tabs: state.tabs.map(tab => 
      tab.id === tabId ? { ...tab, ...updates } : tab
    )
  })),
  
  reorderTabs: (activeId, overId) => set((state) => {
    const oldIndex = state.tabs.findIndex(tab => tab.id === activeId);
    const newIndex = state.tabs.findIndex(tab => tab.id === overId);
    
    if (oldIndex === -1 || newIndex === -1) return state;
    
    const newTabs = [...state.tabs];
    const [movedTab] = newTabs.splice(oldIndex, 1);
    newTabs.splice(newIndex, 0, movedTab);
    
    return { tabs: newTabs };
  }),
  
  openOrFocusTab: (tab) => {
    const state = get();
    const existingTab = state.tabs.find(t => t.id === tab.id);
    
    if (existingTab) {
      state.setActiveTab(tab.id);
    } else {
      state.addTab({ ...tab, isDirty: false });
    }
  }
}));