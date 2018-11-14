import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Error extends Component {

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="index-div section">
        <h1>Internal Error</h1>
        <Link to='/home' className="beer-container beer-top" onClick={this.goBack}><span role="img" aria-label="left-angle-bracket">〈 Return to previous</span></Link>
      </div>
    )
  }
}

export default Error;