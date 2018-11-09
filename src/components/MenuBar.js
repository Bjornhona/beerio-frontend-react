import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuBar extends Component {

  myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  render () {
    return (
      <div className="menu-bar">
        <h3>BEERIO</h3>
        <h5>The happy Beer Gormand</h5>
        <div className="topnav responsive" id="myTopnav">
          <Link to='/home' className="menu-button">Home</Link>
          <Link to='/beers' className="menu-button">Beers</Link>
          <Link to='/favorites' className="menu-button">Favorites</Link>
          <Link to='/play' className="menu-button">Play</Link>
          <Link to="javascript:void(0);" className="icon" onclick="myFunction()">
            <img className="burger-pic" src="/images/burger.png" alt="burger menu" />
          </Link>
        </div>
      </div>
      )
    }
  }
  
  export default MenuBar;