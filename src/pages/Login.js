import React, { Component } from 'react';
import auth from '../lib/auth-service';
import { withAuth } from '../lib/authContext';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user)
      this.props.history.push('/home'); 
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="index-div">
        <div className="section">
        <h2>Log in</h2>
        <p>Welcome back, log in to enter our world of beers!</p>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="section login">
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
            <input type="submit" value="Log in" className="beer-container beer-button beer-top" />
          </div>
        </form>
      </div>
    )
  }
}

export default withAuth(Login);