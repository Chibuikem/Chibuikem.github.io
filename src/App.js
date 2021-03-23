import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header2 from './components/header2'

class App extends Component {

  render(){

    return (
      <>
        <Header2></Header2>
        <div className="border d-flex align-items-center justify-content-center" style={{ height: 350 }} >
          <button type="button" className="btn btn-outline-dark btn-lg" >
            <a href="..\dashboard\index.html" style={{ color: "black", "text-decoration": "none" }}>I am not a robot</a>
          </button>
        </div>
        <div className="border d-flex align-items-center justify-content-center" >
          <img src={logo} className="App-logo" alt="react logo" />
        </div>
      </>
    );
  }
}

export default App;
