import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuBar extends Component {

  // handleResponsive = () => {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //       x.className += "responsive";
  //   } else {
  //       x.className = "topnav";
  //   }
  // }

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
              <Link to="/beers" className="link"><li>Beers</li></Link>
              <Link to="/favorites" className="link"><li>Favorites</li></Link>
              <Link to="/play" className="link"><li>Play</li></Link>
            </ul>
          </div>
        </nav>
        {/* <div className="" id="myTopnav">
          <a href='/home' className="menu-button">Home</a>
          <a href='/beers' className="menu-button">Beers</a>
          <a href='/favorites' className="menu-button">Favorites</a>
          <a href='/play' className="menu-button">Play</a>
          <a href="javascript:void(0);" className="icon" onClick={this.handleResponsive}>
            <img className="burger-pic" src="/images/burger.png" alt="burger menu" />
          </a>
        </div> */}
        {/* <Popup trigger={<button>Trigger</button>} position="top left">
          {close => (
            <div>
              <a href='/home' className="menu-button">Home</a>
              <a href='/beers' className="menu-button">Beers</a>
              <a href='/favorites' className="menu-button">Favorites</a>
              <a href='/play' className="menu-button">Play</a>
              <a className="close" onClick={close}>
                &times;
              </a>
            </div>
          )}
        </Popup> */}
      </div>
      )
    }
  }
  
  export default MenuBar;