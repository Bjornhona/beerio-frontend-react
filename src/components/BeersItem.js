import React from 'react';
import './BeersItem.css';
import Heart from './Heart';

const BeersItem = ({item, history}) => {
  item.isOrganic = 'Y' ? "Yes" : "No";
  const style = item.style && item.style.category.name;
  const icon = item.labels.icon;

  const handlePress = () => {
    return history.push(`/beers/${item.id}`);
  }

  return (
    // <Link to={`/beers/${item.id}`} className='beers-container'>
    <div className='beers-container'>
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
          <span role="img" className="arrow" aria-label="right-angle-bracket" onClick={handlePress}>〉</span>
        </div>
        <div className="organic"><p><strong>Organic: </strong>{item.isOrganic}</p></div>
      </div>
    </div>
  )
}
  
export default BeersItem;