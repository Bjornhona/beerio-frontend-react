import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';

class Play extends Component {
  render() {
    return (
      <div>
        <Link to='/home' className="menu-button">&lt;</Link>
        <h1>Play</h1>
        <h3>You have to play now, {this.props.user.username}</h3>
      </div>
    )
  }
}

export default withAuth(Play);