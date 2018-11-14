import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
  render() {
    return (
      <div className="index-div section">
        <Link to="/beers" className="beer-container beer-button nice-beer">
          <div className="home-align">
            <div>
              <h2>EXPLORE</h2>
              <p>Read about the best beers</p>
            </div>
            <FontAwesomeIcon icon="search" className="fontawesome blue" />
          </div>
        </Link>
        <Link to="/favorites" className="beer-container beer-button nice-beer">
          <div className="home-align">
            <div>
              <h2>FAVORITES</h2>
              <p>Remember the beers you love</p>
            </div>
            <FontAwesomeIcon icon="heart" className="fontawesome red" />
          </div>
        </Link>
        <Link to="/recommended" className="beer-container beer-button nice-beer">
          <div className="home-align">
            <div>
              <h2>RECOMMENDED</h2>
              <p>The most wanted beers</p>
            </div>
          <FontAwesomeIcon icon="star" className="fontawesome lila" />
          </div>
        </Link>
        <Link to="/play" className="beer-container beer-button nice-beer">
          <div className="home-align">
            <div>
              <h2>PLAY</h2>
              <p>Your beer personality</p>
            </div>
            <FontAwesomeIcon icon="play-circle" className="fontawesome yellow" />
          </div>
        </Link>
      </div>
    )
  }
}

export default withAuth(Home);