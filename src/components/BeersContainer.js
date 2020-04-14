import React from 'react';
import { Link } from 'react-router-dom';
import './BeersContainer.css';
import Heart from './Heart';

const BeersContainer = ({item}) => {
  item.isOrganic = 'Y' ? "Yes" : "No";
  const style = item.style && item.style.category.name;
  const icon = item.labels.icon;

  return (
    <Link to={`/beers/${item.id}`} className='beers-container'>
      <div className='img-name-div'>
        <div className="beers-img">{icon && <img src={icon} alt="No pic" />}</div>
        <div className="beer-name">
          <h5>{item.name}</h5>
          <p>{style}</p>
        </div>
      </div>
      <div className="organic-heart">
        <div className="heart-div" >
          <Heart beerData={item} />
          <span role="img" className="arrow" aria-label="right-angle-bracket">〉</span>
        </div>
        <div className="organic"><p><strong>Organic: </strong>{item.isOrganic}</p></div>
      </div>
    </Link>
  )
}
  
export default BeersContainer;