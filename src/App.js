import React from "react";
import "./App.css";
import logo from "./logo.png";
import placeholder1 from "./mustafo.jpg"; 
import placeholder2 from "./lisa.jpg"; 
import placeholder3 from "./pedram.jpg"; 

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} alt="Chloropept Logo" className="logo" />
      </header>

      
      <div className="content-section">
        <h2>Preventing antimicrobial resistance in livestock</h2>

        <div className="team-section">
          <div className="team-member">
            <img src={placeholder1} alt="Mustafo Mustafokulov" className="team-photo" />
            <h4>
              <a href="https://linkedin.com/example1" target="_blank" rel="noopener noreferrer">
                Mustafo Mustafokulov
              </a>
            </h4>
            <p>Cofounder</p>
          </div>
          <div className="team-member">
            <img src={placeholder2} alt="Lisa Sun" className="team-photo" />
            <h4>
              <a href="https://linkedin.com/example2" target="_blank" rel="noopener noreferrer">
                Lisa Sun
              </a>
            </h4>
            <p>Cofounder</p>
          </div>
          <div className="team-member">
            <img src={placeholder3} alt="Pedram Bayat" className="team-photo" />
            <h4>
              <a href="https://linkedin.com/example3" target="_blank" rel="noopener noreferrer">
                Pedram Bayat
              </a>
            </h4>
            <p>Cofounder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
