import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';

class Favorites extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to='/home' className="menu-button">&lt;</Link>
        <h1>Favorites Page</h1>
      </div>
    )
  }
}

export default withAuth(Favorites);