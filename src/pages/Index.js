import React, { Component } from 'react';
import Button from '../components/Button';
import './Index.css';

class Index extends Component {
  
  render() {
    return (
      <div className="index-div section">
        <h1>BEERIO</h1>
        <h5>The happy Beer Gormand</h5>
        <p>Sign up to learn about all your favorite beers. We'll help you remember the good moments!</p>
        <div className="buttons">
          <Button link="/login" text='Log in' />
          <Button link="/signup" text='Sign up' />
        </div>
        <img className="beermix" src="images/beermix.png" alt="beers" />
      </div>
    )
  }
}

export default Index;