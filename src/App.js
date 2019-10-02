import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pictureBox">
        <nav>
          <button className="start-bootstrap" ><b>Start Bootstrap</b></button>
          <div className="menu">MENU<i class="fas fa-bars"></i></div>
          <div className="button-container">
            <button className="nav-button">SERVICES</button>
            <button className="nav-button">PORTFOLIO</button>
            <button className="nav-button">ABOUT</button>
            <button className="nav-button">TEAM</button>
            <button className="nav-button">CONTACT</button>
          </div>
        </nav>
        <div className="middleBox">
          <div className="welcome"><b>Welcome To Our Studio!</b></div>
          <br />
          <div className="nice"> <b>IT'S NICE TO MEET YOU</b></div>
          <br />
          <button id="yellow-btn"><b>TELL ME MORE</b></button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
