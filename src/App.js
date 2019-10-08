import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super ()

    this.dropdown = React.createRef()
  }

toggleShow = () => {
  let {current} = this.dropdown
  if(current.classList.contains('show-animation')){
    current.classList.add('hide-animation')
    current.classList.remove('show-animation')
  } else {
    current.classList.add('show-animation')
    current.classList.remove('hide-animation')
  }
}

  render () {
  return (
    <div className="App">
      <div className="pictureBox">
        <nav>
          <button className="start-bootstrap" ><b>Start Bootstrap</b></button>
          <div className="menu" onClick={this.toggleShow}>MENU<i class="fas fa-bars"></i></div>
        
          <div className="button-container">
            <button className="nav-button">SERVICES</button>
            <button className="nav-button">PORTFOLIO</button>
            <button className="nav-button">ABOUT</button>
            <button className="nav-button">TEAM</button>
            <button className="nav-button">CONTACT</button>
          </div>
        </nav>
        <div className="middleBox">
        <div className="dropdown"  ref={this.dropdown}>
          <button className="dropdown-button">SERVICES</button>
            <button className="dropdown-button">PORTFOLIO</button>
            <button className="dropdown-button">ABOUT</button>
            <button className="dropdown-button">TEAM</button>
            <button className="dropdown-button">CONTACT</button>
          </div>
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
}

export default App;
