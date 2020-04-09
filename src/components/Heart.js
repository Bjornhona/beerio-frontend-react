import React, { Component } from 'react';
import { beerService } from '../lib/beerService';
// import { Link } from 'react-router-dom';

class Heart extends Component {

  state = {
    isFavorite: false,
    data: this.props.data,
    item: [],
    favorites: this.props.favorites
  }

  componentDidMount() {
    this.handleFavorite();
  }

  // componentDidMount() {
  //   this.update();
  // }
  
  // update = () => {
  //   beerService.getFavorites()
  //   .then((result) => {
  //     this.setState({
  //       favorites: result
  //     })
  //   })
  //   .catch((error) => {
  //     console.error('Error');
  //   })
    
  //   beerService.getBeers()
  //   .then((data) => {
  //     this.setState({
  //       data: data
  //     })
  //   })
  //   .catch((error) => {
  //     console.error('Error');
  //   })

  //   this.handleFavorite();
  // }

  handleFavorite = () => {
    const { favorites, data } = this.state;
    const id = this.props.id;
    const item = data.find(item => {
      return item.id === id;
    })
    this.setState({
      item: item
    })

    const favorite = favorites.find(favorite => {
      return favorite.id === item.id;
    });

    if (favorite) {
      let { isFavorite } = this.state;
      // item.favorite = true;
      isFavorite = true;

      this.setState({
        isFavorite: isFavorite
      })
    }
  }

  saveToFavorites = (e) => {
    e.preventDefault();   // stops default link to next page in container
    const { item, isFavorite } = this.state;
    // const style = item.style && item.style.category.name;

    beerService.postFavorite({
      id: item.id,
      name: item.name,
      isOrganic: item.isOrganic,
      icon: item.icon,
      style: item.style.category.name
    })
    .then(() => {
      this.setState({ isFavorite: !isFavorite })
    })
    .catch((error) => {
      console.error('Error');
    })
  }
  
  render() {
    const { isFavorite } = this.state;
    console.log(isFavorite);
    return (
      <div>
          {isFavorite ?
            <span role="img" className="heart" onClick={this.saveToFavorites} aria-label="red-heart">❤️</span> :
            <span role="img" className="heart" aria-label="black-heart" onClick={this.saveToFavorites}>🖤</span>
          }
      </div>
    )
  }
}

export default Heart;

// Heart.PropTypes = {
//   id: React.PropTypes.string,
//   data: React.PropTypes.object,
//   favorites: React.PropTypes.object
// }

// *** Example of PropTypes in a Home Component ***
//
// Home.PropTypes = {
//  name: React.PropTypes.string,
//  age: React.PropTypes.number,
//  user: React.PropTypes.object,
//  children: React.PropTypes.element.isRequired
// }