import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';

class Home extends Component {
  render() {
    return (
      <div className="page-wrap">
        <h1>Home!!!!</h1>
        <h3>Welcome {this.props.user.username}</h3>
      </div>
    )
  }
}

export default withAuth(Home);