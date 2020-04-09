import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuBar extends Component {

  render () {
    return (
      <div className="menu-bar">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <Link to="/home" className="link"><li>Home</li></Link>
              <Link to="/beers" className="link"><li>Explore</li></Link>
              <Link to="/favorites" className="link"><li>Favorites</li></Link>
              <Link to="/recommended" className="link"><li>Recommended</li></Link>
              <Link to="/play" className="link"><li>Play</li></Link>
            </ul>
          </div>
        </nav>
      </div>
      )
    }
  }
  
  export default MenuBar;