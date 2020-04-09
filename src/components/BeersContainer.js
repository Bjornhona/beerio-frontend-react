import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { beerService } from '../lib/beerService';
import './BeersContainer.css';
import Heart from './Heart';

class BeersContainer extends Component {

  state = {
    isFavorite: this.props.isFavorite
  }

  // saveToFavorites = (e) => {
  //   e.preventDefault();   // stops default link to next page in container
  //   const { item, icon, style } = this.props;
  //   const { isFavorite } = this.state;
    
  //   beerService.postFavorite({
  //     id: item.id,
  //     name: item.name,
  //     isOrganic: item.isOrganic,
  //     icon: icon,
  //     style: style
  //   })
  //   .then(() => {
  //     this.setState({ isFavorite: !isFavorite })
  //   })
  //   .catch((error) => {
  //     console.error('Error');
  //   })
  // }

  render () {
    const { item, icon, style, id, data, favorites } = this.props;
    // const { isFavorite } = this.state;
    item.isOrganic = 'Y' ? "Yes" : "No";
    return (
      <Link to={`/beers/${item.id}`} className='beers-container'>
        <div className='img-name-div'>
          <div className="beers-img">{icon && <img src={icon} alt="No pic" />}</div>
          <div className="beer-name">
            <h5>{item.name}</h5>
            <p>{style}</p>
          </div>
        </div>
        <div className="organic-heart">
          <div className="heart-div" >
            {/* <Heart item={item} icon={icon} style={style} isFavorite={isFavorite} /> */}
            <Heart id={id} data={data} favorites={favorites}/>
            <span role="img" className="arrow" aria-label="right-angle-bracket">〉</span>
          </div>
          <div className="organic"><p><strong>Organic: </strong>{item.isOrganic}</p></div>
        </div>
      </Link>
    )
  }
}
  
  export default BeersContainer;