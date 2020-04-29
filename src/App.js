import React from "react";
import "./App.css";
import MetAccess from "./components/met-access";
import WebcamAccess from "./components/webcam-access";

function App() {
  return (
    <div className="App">
      <MetAccess />
      <div className="background"></div>

      <div className="behind">
        <WebcamAccess />
      </div>
    </div>
  );
}

export default App;
