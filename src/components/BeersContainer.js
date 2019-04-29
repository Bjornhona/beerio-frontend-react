import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { beerService } from '../lib/beerService';
import './BeersContainer.css';

class BeersContainer extends Component {

  state = {
    isFavorite: this.props.item.favorite
  }

  saveToFavorites = (e) => {
    e.preventDefault();   // stops default link
    const { item } = this.props;
    const { isFavorite } = this.state;
    
    beerService.postFavorite({
      id: item.id,
      name: item.name,
      isOrganic: item.isOrganic,
      icon: item.labels.icon
    })
    .then(() => {
      this.setState({ isFavorite: !isFavorite })
    })
    .catch((error) => {
      console.error('Error');
    })
    
  }

  render () {
    const {item} = this.props;
    const { isFavorite } = this.state;
    item.isOrganic = 'Y' ? "Yes" : "No";
    return (
      <Link to={`/beers/${item.id}`} className='beers-container'>
        <div className="beers-img">{item.labels && <img src={item.labels.icon} alt="No pic" />}</div>
        <div className="beer-name">
          <h5>{item.name}</h5>
          {item.style && <p>{item.style.category.name}</p>}
        </div>
        <div className="organic-heart">
          <div className="organic"><p><strong>Organic: </strong>{item.isOrganic}</p></div>
          <div className="heart-div" onClick={this.saveToFavorites}>
            <div className="heart">{isFavorite ? <span role="img" aria-label="red-heart">❤️</span> : <span role="img" aria-label="black-heart">🖤</span>}</div>
            {/* <Link to={`/beers/${item.id}`} className="menu-button"><span role="img" aria-label="right-angle-bracket">〉</span></Link> */}
          </div>
        </div>
      </Link>
    )
  }
}
  
  export default BeersContainer;