import React, { useState, useEffect } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import { beerService } from '../lib/beerService';
import BeersItem from '../components/BeersItem';

const Favorites = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(true);

  useEffect(() => {
    update();
  }, []);

  const update = () => {
    beerService.getFavorites()
    .then(result => setFavorites(result))
    .catch(error => console.error('Error'));
  }

  return (
    <div className="index-div section">
      <div className="beers-title">
        <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
        <h4>My Favorite Beers</h4>
      </div>
      {!favorites ? <p>You have not selected any favorites yet.</p> : 
        favorites.map(item => {
          return (
            <BeersItem key={item.id} isFavorite={isFavorite} item={item} icon={item.icon} style={item.style} update={update} history={props.history} />
          )
        })
      }
    </div>
  );
}

export default withAuth(Favorites);