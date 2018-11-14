import React, { Component } from 'react';
import MenuBar from '../components/MenuBar';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';

class Navbar extends Component {
  render() {  
    const { isLogged } = this.props;
    return (
      <div className="navbar menu-section">
        <MenuBar />
        <h3>BEERIO</h3>
        {isLogged ? <div>
          <nav role="navigation">
            <div id="menuToggleRight">
              <input type="checkbox" />
              <img className="user-pic" src="/images/user.png" alt="about user" />
              <ul id="menu-user">
                <li><p>Hi {this.props.user.username}</p></li>
                <li className="cursor" onClick={this.props.logout}>Logout</li>
              </ul>
            </div>
          </nav>
        </div> : <div>
          <nav role="navigation">
            <div id="menuToggleRight">
              <input type="checkbox" />
              <img className="user-pic" src="/images/user.png" alt="about user" />
              <ul id="menu-user">
                <Link to='/login' className="link"><li>Log in</li></Link>
                <Link to='/signup' className="link"><li>Sign up</li></Link>
              </ul>
            </div>
          </nav>
        </div>
      }
      </div>
    )
  }
}

export default withAuth(Navbar);