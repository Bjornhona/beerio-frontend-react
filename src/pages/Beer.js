import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { beerService } from '../lib/beerService';
import { Link } from 'react-router-dom';

class Beer extends Component {

  state = {
      data: [],
      favorites: [],
      item: this.props.item,
      isFavorite: false
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    const id = this.props.match.params.id;
    // const isFavorite = this.state;
    beerService.getBeer(id)
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
        console.log(result, 'This shows result of isFavorite from getFavorites');
        let isFavorite = this.state;
        result.find((favorite) => {
          if (id === favorite.id) {
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

  handleFavorite = (item) => {
    const favorite = this.state.favorites.find(favorite => {
      return favorite.id === item.id;
    });

    if (favorite) {
      item.favorite = true
      }

    this.setState({
      favorite: favorite
    })
      
    }

  saveToFavorites = () => {
    const { isFavorite } = this.state;
    const favorite = this.state;
    console.log(favorite.data, 'This is put to favorites from Beer page');
    
    beerService.postFavorite({
      id: favorite.data.id,
      name: favorite.data.name,
      isOrganic: favorite.data.isOrganic,
      icon: favorite.data.icon
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
            <Link to='/beers' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
            <div className="heart" onClick={this.saveToFavorites}>{isFavorite ? <span role="img" aria-label="red-heart">❤️</span> : <span role="img" aria-label="black-heart">🖤</span>}</div>
          </div>
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

export default withAuth(Beer);