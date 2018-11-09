import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerPeek extends Component {

  render () {
    const {item} = this.props;
    console.log(item)
    return (
      <div className="menu-bar">
        
        {item.labels && <img src={item.labels.icon} alt="No pic" />}
        <h3>{item.name}</h3>
        <p>Info</p>
        <p>Organic Beer: {item.isOrganic}</p>
        <img src="#" alt="Add to favorites" className="toggle-favorite" />
        <Link to='/beers/id' id={item.id} className="menu-button">&gt;</Link>
      </div>
      )
    }
  }
  
  export default BeerPeek;