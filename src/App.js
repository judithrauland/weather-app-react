import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <div className="footer">
          <small>
            <a
              href="https://github.com/judithrauland/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            {""} by Judith Rauland
          </small>
        </div>
      </div>
    </div>
  );
}
