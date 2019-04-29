import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HomeContainer extends Component {
  render() {
    const { link, h2Text, pText, iconName, iconClass } = this.props;
    return (
      <Link to={link} className='home-container'>
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