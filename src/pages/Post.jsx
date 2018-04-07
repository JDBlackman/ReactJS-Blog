import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';

class Post extends Component{



  render(){
    var id = this.props.match.params.id;

    return (
      <div>
        <Navbar/>
        <div className="container">
          <h2>{ id } - PoSt TiTLe</h2>
        </div>
      </div>
    );
  }
}

export default Post
