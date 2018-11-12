import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
  render() {
    return (
      <div className="index-div section">
        <Link to="/beers" className="beer-container beer-button nice-beer">
          <h2>EXPLORE</h2>
          <p>Read about the best beers</p>
          <FontAwesomeIcon icon="stroopwafel" />
        </Link>
        <Link to="/favorites" className="beer-container beer-button nice-beer">
          <h2>FAVORITES</h2>
          <p>Read about the best beers</p>

        </Link>
        <Link to="/random" className="beer-container beer-button nice-beer">
          <h2>RECOMMENDED</h2>
          <p>Read about the best beers</p>

        </Link>
        <Link to="/play" className="beer-container beer-button nice-beer">
          <h2>PLAY</h2>
          <p>Read about the best beers</p>

        </Link>
      </div>
    )
  }
}

export default withAuth(Home);