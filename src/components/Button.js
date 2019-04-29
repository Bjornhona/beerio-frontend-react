import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component {
  
  render() {
    const { link, text } = this.props;
    return (
      <div>
          <Link to={link} className="beer-button"><p>{text}</p></Link>
      </div>
    )
  }
}

export default Button;