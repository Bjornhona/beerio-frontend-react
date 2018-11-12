import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { withAuth } from '../lib/authContext';

class Index extends Component {
  
  render() {
    return (
      <div className="index-div">
        <div className="section">
          <h1>BEERIO</h1>
          <h5>The happy Beer Gormand</h5>
          <p>Sign up to learn about all your favorite beers. We'll help you remember the good moments!</p>
          <Link to="/login" className="beer-container beer-button"><p>Log in</p></Link>
          <Link to="/signup" className="beer-container beer-button"><p>Sign up</p></Link>
          <img className="beermix" src="images/beermix.png" alt="beers" />
        </div>
      </div>
    )
  }
}

export default Index;