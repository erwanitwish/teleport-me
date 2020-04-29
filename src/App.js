import React from "react";
import "./App.css";
import MetAccess from "./components/met-access";
import WebcamAccess from "./components/webcam-access";

function App() {
  return (
    <div className="App">
      <div className="background">
        <MetAccess />
      </div>

      <div className="behind">
        <WebcamAccess />
      </div>
    </div>
  );
}

export default App;
