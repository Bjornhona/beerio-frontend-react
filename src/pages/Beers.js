import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import BeerPeek from '../components/BeerPeek';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import { beerService } from '../lib/beerService';

class Beers extends Component {

  state = {
    data: [],
    favorites: [],
    isFavorite: false
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    beerService.getBeers()
    .then((data) => {
      this.setState({
        data: data
      })
    })
    .catch((error) => {
      console.log(error);
    })

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

  handleFavorite = (item) => {
    const favorite = this.state.favorites.find(favorite => {
      return favorite.id === item.id;
    });
    console.log(favorite);

    if (favorite) {
      item.favorite = true
      }
    }
    
  render() {
    const { data } = this.state;
    return (
      <div className="index-div section">
        <SearchBar />
        <div className="beers-title">
          <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
          <h4>Explore the worlds best beers</h4>
        </div>
        {data.map((item) => {
          this.handleFavorite(item);
          return (
            <div className="beer-container" key={item.id}>
              <BeerPeek item={item} update={this.update} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default withAuth(Beers);