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
    const id = this.props.match.params.id
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
      this.setState({
        favorites: result,
        isFavorite: true
      })
    })
    .catch((error) => {
      console.log(error);
    })

    // beerService.getBeer()
    // .then((result) => {
    //   this.setState({
    //     favorites: result.favorites
    //   })
    // })
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

  render() {
    const { item } = this.props;
    let { data, isFavorite } = this.state;
    console.log(data)
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