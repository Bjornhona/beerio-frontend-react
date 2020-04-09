import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeContainer.css';
import { beerService } from '../lib/beerService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HomeContainer extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      favorites: []
    }
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
    
    beerService.getBeers()
    .then((data) => {
      this.setState({
        data: data
      })
    })
    .catch((error) => {
      console.error('Error');
    })
  }

  render() {
    const { link, h2Text, pText, iconName, iconClass } = this.props;
    const { data, favorites } = this.state;
    return (
      <Link className='home-container' to={{pathname: `${link}`, myProps: {data: data, favorites: favorites}}}>
        <div className="home-text">
          <h2>{h2Text.toUpperCase()}</h2>
          <p>{pText}</p>
        </div>
        <div className="home-icon">
          <FontAwesomeIcon icon={iconName} className={iconClass} />
        </div>
      </Link>
    )
  }
}

export default HomeContainer;