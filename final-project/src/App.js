import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar></NavBar>
        </div>
      </div>
    );
  }
}

export default App;
