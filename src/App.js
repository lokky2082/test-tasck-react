import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button'

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
