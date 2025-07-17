import { useState } from "react";
import ActivityBar from "./components/Layout/ActivityBar";
import SideBar from "./components/Layout/SideBar";
import EditorArea from "./components/Layout/EditorArea";
import StatusBar from "./components/Layout/StatusBar";
import TitleBar from "./components/Layout/TitleBar";
import RightPanel from "./components/Layout/RightPanel";
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState("explorer");
  const [sideBarVisible, setSideBarVisible] = useState(true);
  const [activeApp, setActiveApp] = useState<string | undefined>(undefined);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [bottomPanelOpen, setBottomPanelOpen] = useState(false);

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
    setActiveApp(type);
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
        <EditorArea activeApp={activeApp} />
        <RightPanel isOpen={rightPanelOpen} />
      </div>
      <StatusBar activeApp={activeApp} projectName="DrillHub" />
    </div>
  );
}

export default App;
