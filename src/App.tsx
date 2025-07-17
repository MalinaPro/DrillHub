import { useState } from "react";
import ActivityBar from "./components/Layout/ActivityBar";
import SideBar from "./components/Layout/SideBar";
import TabContainer from "./components/Layout/TabContainer";
import StatusBar from "./components/Layout/StatusBar";
import TitleBar from "./components/Layout/TitleBar";
import RightPanel from "./components/Layout/RightPanel";
import { useTabStore } from "./store/tabStore";
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState("explorer");
  const [sideBarVisible, setSideBarVisible] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [bottomPanelOpen, setBottomPanelOpen] = useState(false);
  const { openTab } = useTabStore();

  const handleViewChange = (view: string) => {
    if (activeView === view) {
      setSideBarVisible(!sideBarVisible);
    } else {
      setActiveView(view);
      setSideBarVisible(true);
    }
  };

  const handleRightPanelToggle = () => {
    setRightPanelOpen(!rightPanelOpen);
  };

  const handleOpenInEditor = (type: 'settings' | 'account', title: string) => {
    openTab({
      id: type,
      title: title,
      type: type,
      closable: true,
      modified: false
    });
  };

  const handleLeftPanelToggle = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const handleBottomPanelToggle = () => {
    setBottomPanelOpen(!bottomPanelOpen);
  };

  return (
    <div className="app">
      <TitleBar 
         onToggleRightPanel={handleRightPanelToggle}
         isRightPanelOpen={rightPanelOpen}
         onToggleLeftPanel={handleLeftPanelToggle}
         isLeftPanelOpen={sideBarVisible}
         onToggleBottomPanel={handleBottomPanelToggle}
         isBottomPanelOpen={bottomPanelOpen}
       />
      <div className="app-layout">
        <ActivityBar 
          activeView={activeView} 
          onViewChange={handleViewChange}
          onChatToggle={handleRightPanelToggle}
          isChatVisible={rightPanelOpen}
          onOpenInEditor={handleOpenInEditor}
        />
        <SideBar 
          activeView={activeView} 
          isVisible={sideBarVisible} 
          onOpenInEditor={handleOpenInEditor}
        />
        <TabContainer />
        <RightPanel isOpen={rightPanelOpen} />
      </div>
      <StatusBar projectName="Marketplace App" />
    </div>
  );
}

export default App;
