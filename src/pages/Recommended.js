import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { beerService } from '../lib/beerService';
import { Link } from 'react-router-dom';

class Recommended extends Component {

  state = {
      data: [],
      favorites: this.props.user.favorites,
      // favorite: false,
      isFavorite: false,
      randomId: '',
      randomIndex: 0
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    beerService.getBeers()
    .then((data) => {
      let randomIndex = Math.floor(Math.random() * data.length);
      let favorites = this.props.user.favorites;
      
      data = data[randomIndex];
      // if (favorites.includes(data)) {
      //   this.setState({
      //     isFavorite : true
      //   })
      // }
      // favorites.find((element)=>{
      //   return element.id === data.id
      //   })
      console.log(data, 'Aqui es la data del random')
      this.setState({
        data: data,
        randomIndex: randomIndex,
      })

      
    })
    .catch((error) => {
      console.log(error);
    })

    beerService.getFavorites()
    .then((result) => {
        let { isFavorite, favorites, data } = this.state;
        console.log(favorites, 'These are my favorites');

        favorites.find((favorite) => {
          console.log(data, 'data.id');
          console.log(favorite.id, 'favorite.id');

          if (data.id === favorite.id) {
            return isFavorite = true;
          } else {
            return isFavorite = false;
          }
        })
        this.setState({
          isFavorite: isFavorite
        })
        
      this.setState({
        favorites: result,
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleFavorite = () => {
    let favorites, randomIndex = this.state;
    const favorite = this.state.favorites.find(favorite => {
      return favorite.id === favorites[randomIndex].id;
    });
    if (favorite) {
      this.favorite = true
      }
    this.setState({
      favorite: favorite
    })
  }

  saveToFavorites = () => {
    const { isFavorite } = this.state;
    const favorite = this.state;
    
    beerService.postFavorite({
      id: favorite.data.id,
      name: favorite.data.name,
      isOrganic: favorite.data.isOrganic,
      icon: favorite.data.labels && favorite.data.labels.icon
    })
    .then(() => {
      this.setState({ isFavorite: !isFavorite })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    let { data, isFavorite } = this.state;
    return (
      <div className="index-div section">
        <div className="beer-container beer-text">
          <div className="back-heart">
            <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
            <div className="heart" onClick={this.saveToFavorites}>{isFavorite ? <span role="img" aria-label="red-heart">❤️</span> : <span role="img" aria-label="black-heart">🖤</span>}</div>
          </div>
          <h3>Our selected recommendation</h3>
          {data.labels && <div className="label-img"><div><img className="big-label-img" src={data.labels.large} alt="No pic" /></div></div>}
          <h1>{data.name}</h1>
          {data.style && <h5>{data.style.name}</h5>}
          {data.style && <h6>{data.style.category.name}</h6>}
          {data.style && <p>{data.style.year}</p>}
          {data.style && <p>{data.style.description}</p>}
          <div className="beer-info">
            <div><strong>Abv: </strong>{data.abv}%</div>
            <div><strong>Ibu: </strong>{data.style && data.style.ibuMax}</div>
            <div><strong>Organic Beer:</strong> {data.isOrganic}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Recommended);