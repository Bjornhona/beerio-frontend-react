import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import HomeContainer from '../components/HomeContainer';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-div section">
        <HomeContainer link='/beers' h2Text='Explore' pText='Read about the best beers' iconName='search' iconClass='fontawesome blue' />
        <HomeContainer link='/favorites' h2Text='Favourites' pText='Remember the beers you love' iconName='heart' iconClass='fontawesome red' />
        <HomeContainer link='/recommended' h2Text='Recommended' pText='The most wanted beers' iconName='thumbs-up' iconClass='fontawesome lila' />
        <HomeContainer link='/play' h2Text='Play' pText='Your beer personality' iconName='play-circle' iconClass='fontawesome yellow' />
      </div>
    )
  }
}

export default withAuth(Home);