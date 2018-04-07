import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';

class About extends Component{
  render(){
    return (
      <div>
        <Navbar/>
        <div className="container">
          <h2>about my BlOg</h2>
          <p>
            I made this blog as my first reactjs project, it could be the most horrifically coded thing in the world but hey, im trying okay?
          </p>
        </div>
      </div>
    );
  }
}

export default About
