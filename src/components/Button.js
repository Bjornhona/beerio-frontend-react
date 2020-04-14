import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
  const { link, text } = props;

  return (
    <div>
        <Link to={link} className="beer-button"><p>{text}</p></Link>
    </div>
  );
}

export default Button;