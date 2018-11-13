import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import { beerService } from '../lib/beerService';
import BeerPeek from '../components/BeerPeek';

class Favorites extends Component {

  state = {
    favorites: [],
    id: '',
    name: '',
    isOrganic: '',
    icon: '',
    isFavorite: false
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    beerService.getFavorites()
    .then((result) => {
      this.setState({
        favorites: result,
        id: result.id,
        name: result.name,
        isOrganic: result.isOrganic,
        icon: result.icon
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { favorites, isFavorite } = this.state;
    return (
      <div className="index-div section">
        <div className="beers-title">
          <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
          <h4>My Favorite Beers</h4>
        </div>
        {favorites.map((item) => {
          return (
            <div className="beer-container" key={item.id}>
              <BeerPeek item={item} favorite={this.handleFavorite(item)} isFavorite={isFavorite} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default withAuth(Favorites);