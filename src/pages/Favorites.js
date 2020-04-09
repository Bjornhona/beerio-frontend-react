import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import { beerService } from '../lib/beerService';
import BeersContainer from '../components/BeersContainer';


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
      console.error('Error');
    })
  }

  render() {
    const { favorites, isFavorite } = this.state;
    console.log(favorites)
    return (
      <div className="index-div section">
        <div className="beers-title">
          <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
          <h4>My Favorite Beers</h4>
        </div>
        {(!favorites) ? <p>You have not selected any favorites yet.</p> : 
          favorites.map((item) => {
            return (
              <BeersContainer key={item.id} isFavorite={isFavorite} item={item} icon={item.icon} style={item.style} update={this.update} />
            )
          })
        }
      </div>
    )
  }
}

export default withAuth(Favorites);