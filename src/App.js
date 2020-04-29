import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MetAccess from "./components/met-access";
import WebcamAccess from "./components/webcam-access";
import Credits from "./components/credits";

function App() {
  return (
    <Router>
      <switch>
        <div className="App">
          <Route exact path="/">
            <MetAccess />
            <div className="background"></div>
            <div className="behind">
              <WebcamAccess />
            </div>
          </Route>
          <Route exact path="/credits">
            <Credits />
          </Route>
        </div>
      </switch>
    </Router>
  );
}

export default App;
