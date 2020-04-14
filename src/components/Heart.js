import React, { useState, useEffect } from 'react';
import { beerService } from '../lib/beerService';

const Heart = ({beerData}) => {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let ignore = false;

    const getFavorite = async () => 
      await beerService.getFavorites()
        .then(result => {
          if (!ignore) {
            const newFavorite = result.find(item => (item.id === beerData.id));
            if (newFavorite) {setIsFavorite(true)}
          }
        })
        .catch(error => {
          console.error('Error');
      });
      getFavorite();

      return () => {ignore = true};
  }, [beerData.id]);

  const handleFavorites = async (e) => {
    // e.preventDefault();   // stops default link to next page in container

    await beerService.postFavorite({
      id: beerData.id,
      name: beerData.name,
      isOrganic: beerData.isOrganic,
      icon: beerData.icon,
      style: beerData.style.category.name
    })
    .then(() => setIsFavorite(!isFavorite))
    .catch(error => console.error('Error'))
  }
  
  return (
    <div>
        {isFavorite ?
          <span role="img" className="heart" onClick={handleFavorites} aria-label="red-heart">❤️</span> :
          <span role="img" className="heart" onClick={handleFavorites} aria-label="black-heart">🖤</span>
        }
    </div>
  )
}

export default Heart;