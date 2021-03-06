import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Post from './pages/Post.jsx';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/about"  component={About}/>
          <Route path="/post/:id" component={Post}/>
        </div>
      </Router>
    );
  }
}

export default App;
