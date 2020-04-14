import React from 'react';
import './HomeItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeItem = (props) => {
  const { link, h2Text, pText, iconName, iconClass, history } = props;

  const handlePress = () => {
    return history.push(link);
  }

  return (
    <div className='home-container' onClick={handlePress}>
      <div className="home-text">
        <h2>{h2Text.toUpperCase()}</h2>
        <p>{pText}</p>
      </div>
      <div className="home-icon">
        <FontAwesomeIcon icon={iconName} className={iconClass} />
      </div>
    </div>
  )
}

export default HomeItem;