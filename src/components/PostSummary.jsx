import React, { Component } from 'react';
import PostSnippet from './PostSnippet.jsx';
import { Link }  from 'react-router-dom';

class PostSummary extends Component{
  render(){

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <div className="card mb-5">
        <div className="card-body">
          <h5 className="card-title">{number}</h5>
          <h6 className="card-subtitle mb-2 text-muted">01/01/18</h6>
          <p className="card-text">Lorem ipsum dolor sit amet, molestiae aliquando an sea, no brute temporibus complectitur has. Ad prima affert constituam mei. Velit tation scaevola cu pro, ex qui alii vitae quando, an nec utinam volutpat convenire. Est assum debitis fabellas te, liber tation per et. Modo appetere ut qui, veritus denique urbanitas ut mel, utinam dissentiet pro te.</p>
          <div className="text-right">
            <Link to={'/post/' + number}><button className="btn btn-primary">Read More</button></Link>
          </div>
        </div>
      </div>
    );

    return(
      <div>
        {listItems}
      </div>
    );
  }
}

export default PostSummary
