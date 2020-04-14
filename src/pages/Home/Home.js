import React from 'react';
import { withAuth } from '../../lib/authContext';
import HomeItem from './components/HomeItem';
import './Home.css';

const Home = (props) => {
  const history = props.history;

  return (
    <div className="home-div section">
      <HomeItem 
        link='/beers' 
        h2Text='Explore' 
        pText='Read about the best beers' 
        iconName='search' 
        iconClass='fontawesome blue'
        history={history} />
      <HomeItem 
        link='/favorites' 
        h2Text='Favourites' 
        pText='Remember the beers you love' 
        iconName='heart' 
        iconClass='fontawesome red' 
        history={history} />
      <HomeItem 
        link='/recommended' 
        h2Text='Recommended' 
        pText='The most wanted beers' 
        iconName='thumbs-up' 
        iconClass='fontawesome lila' 
        history={history} />
      <HomeItem 
        link='/play' 
        h2Text='Play' 
        pText='Your beer personality' 
        iconName='play-circle' 
        iconClass='fontawesome yellow'
        history={history} />
    </div>
  )
}

export default withAuth(Home);