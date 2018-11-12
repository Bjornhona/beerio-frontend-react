import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../lib/authContext';

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    auth.signup({ username, password })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
        this.props.setUser(user);
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
          <h2>Sign up</h2>
          <p>Become a part of this world of beers and sign up today!</p>
          <form onSubmit={this.handleFormSubmit} className="signup">
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={this.handleChange}/>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
            <input type="submit" value="Sign up" className="beer-container beer-button beer-top" />
            <p>Already have account? 
              <Link to={"/login"}> Login</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default withAuth(Signup);