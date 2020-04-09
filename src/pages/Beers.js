import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
// import { beerService } from '../lib/beerService';
import BeersContainer from '../components/BeersContainer';
import './Beers.css';

class Beers extends Component {

  state = {
    data: [],
    inputValue: '',
    favorites: [],
    isLoading: true
  }

  componentDidMount() {
    const { data, favorites } = this.props.location.myProps;
    console.log(data);
    console.log(favorites);
    this.setState({
      data: data,
      favorites: favorites,
      isLoading: false
    })
  }

  // componentDidMount() {
  //   this.update();
  // }

  // update = () => {
  //   beerService.getBeers()
  //   .then((data) => {
  //     this.setState({
  //       isLoading: false,
  //       data: data
  //     })
  //   })
  //   .catch((error) => {
  //     console.error('Error');
  //     this.setState({
  //       isLoading: false
  //     })
  //   })

  //   beerService.getFavorites()
  //   .then((result) => {
  //     this.setState({
  //       favorites: result
  //     })
  //   })
  //   .catch((error) => {
  //     console.error('Error');
  //   })
  // }

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
  
  render() {
    let { data, inputValue, isLoading, favorites } = this.state;
        
    data = data.filter((item) => {
      let dataName = item.name.toUpperCase();
      return dataName.includes(inputValue.toUpperCase())
    })

    return (
      
      isLoading ? <div className="section"><h1>Loading...</h1></div> : 
      <div className="beers-div section">
        <div className="searchbar"><input type="text" name="name" value={inputValue} onChange={this.handleSearchInput} placeholder="Search" /></div>
        <div className="beers-title">
          <Link to='/home' className="back-sign"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
          <h4>Explore the worlds best beers</h4>
          <span></span>
        </div>
        {data.map((item) => {
          this.handleFavorite(item);
          const style = item.style && item.style.category.name;
          return (
            <BeersContainer
              key={item.id}
              id={item.id}
              isFavorite={item.favorite}
              item={item}
              icon={item.labels.icon}
              style={style}
              update={this.update}
              data={data}
              favorites={favorites}
            />
          )
        })}
      </div>
    )
  }
}

export default withAuth(Beers);