import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeContainer.css';
import { beerService } from '../lib/beerService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeContainer = (props) => {
  const { link, h2Text, pText, iconName, iconClass } = props;

  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let ignore = false;
    let soIgnore = false;
    // update();
    const getBeers = () => beerService.getBeers()
    .then(data => {if (!ignore) {setData(data)}})
    .catch(error => console.error('Error'));
    getBeers();

    const getFavorites = () => beerService.getFavorites()
    .then(result => {if (!soIgnore) {setFavorites(result)}})
    .catch(error => console.error('Error'));
    getFavorites();

    return () => {ignore = true; soIgnore = true;}
  }, []);

  return (
    <Link className='home-container' to={{pathname: `${link}`, myProps: {data: data, favorites: favorites}}}>
      <div className="home-text">
        <h2>{h2Text.toUpperCase()}</h2>
        <p>{pText}</p>
      </div>
      <div className="home-icon">
        <FontAwesomeIcon icon={iconName} className={iconClass} />
      </div>
    </Link>
  )
}

export default HomeContainer;