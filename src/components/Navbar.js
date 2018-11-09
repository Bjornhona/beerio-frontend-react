import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';

class Navbar extends Component {
  render() {  
    const { isLogged } = this.props;
    return (
      <div className="navbar">
        <div><img className="burger-pic" src="/images/burger.png" alt="burger menu" /></div>
        <h3>Searchbar</h3>
        <div><img className="user-pic" src="/images/user.png" alt="about user" /></div>
        {isLogged ? <div>
          <p>username: {this.props.user.username}</p>
          <p onClick={this.props.logout}>Logout</p>
        </div> : <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
      }
      </div>
    )
  }
}

export default withAuth(Navbar);