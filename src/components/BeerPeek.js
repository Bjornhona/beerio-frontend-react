import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import auth from '../lib/auth-service';
import { beerService } from '../lib/beerService';

class BeerPeek extends Component {

  saveToFavorites = () => {
    const { item } = this.props;
    beerService.postFavorite({
      id: item.id,
      name: item.name,
      isOrganic: item.isOrganic,
      icon: item.labels.icon
    })
    .then()
    .catch()
  }

  render () {
    const {item} = this.props;
    item.isOrganic = 'Y' ? "Yes" : "No";

    return (
      <div className="beer-peek">
        <div>{item.labels && <img src={item.labels.icon} alt="No pic" />}</div>
        <div>
          <h5>{item.name}</h5>
          {item.style && <p>{item.style.category.name}</p>}
        </div>
        <p><strong>Organic: </strong>{item.isOrganic}</p>
        <div>
          <div className="toggle-favorite heart" onClick={this.saveToFavorites}>&hearts;<span role="img" aria-label="black-heart">🖤</span></div>
          <Link to={`/beers/${item.id}`} className="menu-button">&gt;</Link>
        </div>
      </div>
    )
  }
}
  
  export default BeerPeek;