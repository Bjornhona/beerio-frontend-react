import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { beerService } from '../lib/beerService';
import { Link } from 'react-router-dom';
import Heart from '../components/Heart';

class Recommended extends Component {

  state = {
      item: [],
      favorites: false,
      isFavorite: false,
      randomId: '',
      isLoading: true
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    beerService.getBeers()
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      
      const item = data[randomIndex];
      const randomId = item.id;

      
      this.setState({
        item: item,
        isLoading: false,
        randomId: randomId
      })

      beerService.getFavorites()
      .then((favorites) => {
        console.log(favorites)
        console.log(item)

        favorites.find(favorite => {
          return favorite.id === item.id
        })
        const found = favorites.find((favorite) => {
            return favorite.id === item.id
          })

        if (found) {
          item.favorite = true;
          
          this.setState({
            isFavorite: item.favorite
          })
        }
        
      })

    })
    .catch((error) => {
      console.error('Error');
    })
  }

  render() {
    let { item, isFavorite, isLoading } = this.state;
    const icon = item.labels && item.labels.icon;
    const style = item.style && item.style.category.name;
    console.log(isFavorite);
    // this.handleFavorite(item);
    return (
      isLoading ? <div className="index-div section"><h1>Loading...</h1></div> : 
      <div className="index-div section">
        <div className="beer-container beer-text">
          <div className="back-heart">
            <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
            <Heart item={item} icon={icon} style={style} />
          </div>
          <h3>Our selected recommendation</h3>
          {item.labels && <div className="label-img"><div><img className="big-label-img" src={item.labels.large} alt="No pic" /></div></div>}
          <h1>{item.name}</h1>
          {item.style && <h5>{item.style.name}</h5>}
          {item.style && <h6>{item.style.category.name}</h6>}
          {item.style && <p>{item.style.year}</p>}
          {item.style && <p>{item.style.description}</p>}
          <div className="beer-info">
            <div><strong>Abv: </strong>{item.abv}%</div>
            <div><strong>Ibu: </strong>{item.style && item.style.ibuMax}</div>
            <div><strong>Organic Beer:</strong> {item.isOrganic}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Recommended);