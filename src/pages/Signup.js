import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../lib/authContext';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    alert: ""
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
      .catch( error => {
        console.log(error);
        const { data } = error.response;
        switch(data.error){
          case 'empty':
            this.setState({
              alert: 'Username or password can´t be empty'
            });
            break;
          case 'username-not-unique':
            this.setState({
              alert: 'User already exists'
            });
            break;
          // case 'validation':
          //   this.setState({
          //     alert: 'Username or password can´t be empty.'
          //   });
          //   break;
          default:
            this.setState({
              alert: ''
            })
        }   
      })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, alert } = this.state;
    return (
      <div className="index-div">
        <div className="section">
          <h2>Sign up</h2>
          <p>Become a part of this world of beers and sign up today!</p>
          <form onSubmit={this.handleFormSubmit} className="signup">
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
            <input type="submit" value="Sign up" className="beer-container beer-button beer-top" />
            <p>Already have account? 
              <Link to={"/login"}> Log in</Link>
            </p>
          </form>
          { alert ? <div className="section alert"><h5>{alert}</h5></div> : <div></div>}
        </div>
      </div>
    )
  }
}

export default withAuth(Signup);