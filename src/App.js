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
            <a href="..\dashboard\index.html" style={{ color: "black", "text-decoration": "none" }}>ENTER</a>
          </button>
        </div>
        <div className="border d-flex align-items-center justify-content-center" >
          <cite style={{ "font-weight": "bold", "margin-right": -15 }}>Built using:</cite>
          <img src={logo} className="App-logo" alt="react logo" />
        </div>
      </>
    );
  }
}

export default App;
