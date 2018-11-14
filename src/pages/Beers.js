import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import BeerPeek from '../components/BeerPeek';
import { Link } from 'react-router-dom';
import { beerService } from '../lib/beerService';

class Beers extends Component {

  state = {
    data: [],
    inputValue: '',
    favorites: [],
    isFavorite: false,
    isLoading: true
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    beerService.getBeers()
    .then((data) => {
      this.setState({
        isLoading: false,
        data: data
      })
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        isLoading: false
      })
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

    if (favorite) {
      item.favorite = true
      }
    }
    
  handleSearchInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  // handleSearch = (data) => {
  //   let { inputValue } = this.state;

  //   data = data.filter((item) => {
  //     let dataName = item.name.toUpperCase();
  //     return dataName.includes(inputValue.toUpperCase())
  //   })
  // }
  
  render() {
    let { data, inputValue, isLoading } = this.state;
    // this.handleSearch(data);
    
    data = data.filter((item) => {
      let dataName = item.name.toUpperCase();
      return dataName.includes(inputValue.toUpperCase())
    })

    return (
      isLoading ? <div className="section"><h1>Loading...</h1></div> : 
      <div className="index-div section">
        <div className="searchbar"><input type="text" name="name" value={inputValue} onChange={this.handleSearchInput} placeholder="Search" /></div>
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