import React, { Component } from 'react';
import Questionnaire from './components/questionnaire';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Carmen</h1>
        </header>
        <Questionnaire />
      </div>
    );
  }
}

export default App;
