import React, { useState, useEffect } from 'react';
import { withAuth } from '../lib/authContext';
import { beerService } from '../lib/beerService';
import { Link } from 'react-router-dom';
import Heart from '../components/Heart';

const Recommended = () => {
  const [item, setItem] = useState([]);
  const [favorites, setFavorites] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [randomId, setRandomId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const icon = item.labels && item.labels.icon;
  const style = item.style && item.style.category.name;

  useEffect(() => {
    update();
  }, []);

  const update = () => {
    beerService.getBeers()
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      
      const newItem = data[randomIndex];
      const newRandomId = newItem.id;

      setItem(newItem);
      setIsLoading(false);
      setRandomId(newRandomId);

      beerService.getFavorites()
      .then((favoritesData) => {
        const found = favoritesData.find(favorite => favorite.id === newItem.id);

        if (found) {
          newItem.favorite = true;
          setIsFavorite(newItem.favorite);
        }
      });
    })
    .catch((error) => {
      console.error('Error');
    })
  }

  return (
    isLoading ? <div className="index-div section"><h1>Loading...</h1></div> : 
    <div className="index-div section">
      <div className="beer-container beer-text">
        <div className="back-heart">
          <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
          {/* <Heart item={item} icon={icon} style={style} /> */}
        </div>
        <h3>Our selected recommendation</h3>
        {item.labels && <div className="label-img"><div><img className="big-label-img" src={item.labels.large} alt="No pic" /></div></div>}
        <h1>{item.name}</h1>
        {item.style && 
          <>
            <h5>{item.style.name}</h5>
            <h6>{item.style.category.name}</h6>
            <p>{item.style.year}</p>
            <p>{item.style.description}</p>
          </>
        }
        <div className="beer-info">
          <div><strong>Abv: </strong>{item.abv}%</div>
          <div><strong>Ibu: </strong>{item.style && item.style.ibuMax}</div>
          <div><strong>Organic Beer:</strong> {item.isOrganic}</div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Recommended);