import { useState } from "react";
import ActivityBar from "./components/Layout/ActivityBar";
import SideBar from "./components/Layout/SideBar";
import EditorArea from "./components/Layout/EditorArea";
import StatusBar from "./components/Layout/StatusBar";
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState("explorer");
  const [sideBarVisible, setSideBarVisible] = useState(true);
  const [activeApp, setActiveApp] = useState<string | undefined>(undefined);

  const handleViewChange = (view: string) => {
    if (activeView === view) {
      setSideBarVisible(!sideBarVisible);
    } else {
      setActiveView(view);
      setSideBarVisible(true);
    }
  };

  return (
    <div className="app">
      <div className="app-layout">
        <ActivityBar activeView={activeView} onViewChange={handleViewChange} />
        <SideBar activeView={activeView} isVisible={sideBarVisible} />
        <EditorArea activeApp={activeApp} />
      </div>
      <StatusBar activeApp={activeApp} projectName="Marketplace App" />
    </div>
  );
}

export default App;
