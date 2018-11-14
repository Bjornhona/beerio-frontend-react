import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';

class Play extends Component {

  state = {
    mood: '',
    happiness: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // const username = this.state.username;
    // const password = this.state.password;

    // auth.signup({ username, password })
    //   .then( (user) => {
    //     this.setState({
    //         username: "",
    //         password: "",
    //     });
    //     this.props.setUser(user);
    //     this.props.history.push('/home');
    //   })
    //   .catch( error => console.log(error) )
  }

  render() {
    const { mood, happiness} = this.state;
    return (
      <div className="index-div section">
        <div className="beers-title">
          <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
          <h4>What beer mood are you in, {this.props.user.username}?</h4>
        </div>
        <form onSubmit={this.handleFormSubmit} className="signup">
          <label>Select your current mood</label>
          <label>Happy:</label>
          <input type="radio" name="happy" value={mood} /*onChange={this.handleChange*//>
          <label>Tired:</label>
          <input type="radio" name="tired" value={mood} />
          <label>angry:</label>
          <input type="radio" name="angry" value={mood} />
          <label>Bored:</label>
          <input type="radio" name="bored" value={mood} />

          <label>Select your area</label>
          <input type="radio" name="happiness" value={happiness} onChange={this.handleChange} />

          <input type="submit" value="Get the result" className="beer-container beer-button beer-top" />
          <p>Scared of the result? 
            <Link to={"/home"}> Exit</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default withAuth(Play);