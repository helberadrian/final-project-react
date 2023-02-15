import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar';
import CartWidget from './components/cartWidget';


// Pages
import Home from "./pages/home/index";
import Category from "./pages/category/index";
import Product from "./pages/product/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <NavBar />
            <CartWidget number={0}></CartWidget>
          </div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/:categoryId' element={<Category />} />
              <Route path='/product/:productId' element={<Product />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
