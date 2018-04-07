import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import PostSummary from '../components/PostSummary.jsx';

class Home extends Component{
  render(){
    return (
      <div>
        <Navbar/>
        <div className="container">
          <h2>Welcome to my bLoG</h2>
          <PostSummary/>
        </div>
      </div>
    );
  }
}

export default Home
