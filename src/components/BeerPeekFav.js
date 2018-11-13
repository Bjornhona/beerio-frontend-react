import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import auth from '../lib/auth-service';
import { beerService } from '../lib/beerService';

class BeerPeekFav extends Component {

  state = {
    isFavorite: this.props.item.favorite
  }

  saveToFavorites = () => {
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
      console.log(error);
    })
  }

  render () {
    const {item} = this.props;
    const { isFavorite } = this.state;
    item.isOrganic = 'Y' ? "Yes" : "No";
    return (
      <div className="beer-peek">
        <div className="beer-peek-img">{item.labels && <img src={item.labels.icon} alt="No pic" />}</div>
        <div className="beer-name">
          <h5>{item.name}</h5>
          {item.style && <p>{item.style.category.name}</p>}
        </div>
        <div className="organic-heart">
          <div className="organic"><p><strong>Organic: </strong>{item.isOrganic}</p></div>
          <div className="heart-div">
            <div className="heart" onClick={this.saveToFavorites}>{isFavorite ? <span role="img" aria-label="red-heart">❤️</span> : <span role="img" aria-label="black-heart">🖤</span>}</div>
            <Link to={`/beers/${item.id}`} className="menu-button" item={item}><span role="img" aria-label="right-angle-bracket">〉</span></Link>
          </div>
        </div>
      </div>
    )
  }
}
  
  export default BeerPeekFav;