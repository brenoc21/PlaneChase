import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'dark');

  const themeConfig = {
    token: {
      colorPrimary: currentTheme === 'dark' ? "#642ab5" : "#8a2be2",
      colorBgBase: currentTheme === 'dark' ? "#1f1b28" : "#d6c7e4",
      colorTextBase: "#ffffff",
      colorTextSecondary: "#ffffff",
      colorBgContainer: "#281c3a"

      
    }
  };
    useEffect(() => {
      // Block device rotation
      if (window.screen.orientation && window.screen.orientation.lock) {
        window.screen.orientation.lock("portrait").catch((error) => {
          console.error("Failed to lock device rotation:", error);
        });
      }
    }, []);

    return (
      <ConfigProvider theme={themeConfig}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}></Home>}></Route>
          </Routes>
        </div>
      </ConfigProvider>
    );
  };

  export default App;

  