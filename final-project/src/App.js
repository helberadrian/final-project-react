import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import CartWidget from './components/cartWidget';
import ItemContainer from './components/itemListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar></NavBar>
          <CartWidget number={0}></CartWidget>
        </div>
        <ItemContainer></ItemContainer>
      </div>
    );
  }
}

export default App;
