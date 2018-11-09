import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';

class Favorites extends Component {
  render() {
    return (
      <div>
        <Link to='/home' className="menu-button">&lt;</Link>
        <h1>Favorites Page</h1>
      </div>
    )
  }
}

export default withAuth(Favorites);