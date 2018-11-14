import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import { beerService } from '../lib/beerService';
import BeerPeekFav from '../components/BeerPeekFav';

class Favorites extends Component {

  state = {
    favorites: [],
    isFavorite: true
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    beerService.getFavorites()
    .then((result) => {

      this.setState({
        favorites: result
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { favorites } = this.state;
    return (
      <div className="index-div section">
        <div className="beers-title">
          <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
          <h4>My Favorite Beers</h4>
        </div>
        {favorites.map((item) => {
          return (
            <div className="beer-container" key={item.id}>
              <BeerPeekFav item={item} update={this.update} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default withAuth(Favorites);