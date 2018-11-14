import React, { Component } from 'react';
import auth from '../lib/auth-service';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';

class Login extends Component {
  state = {
    username: "",
    password: "",
    alert: ""
  }

  // componentDidMount() {
  //   this.props.history.push('/home');
  // }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user)
      this.props.history.push('/home'); 
    })
    .catch(error => {
      console.log(error);
      const { data } = error.response;
      switch(data.error){
        // case 'User or password invalid':
        //   this.setState({
        //     alert: 'invalid username'
        //   });
        //   break;
        case 'not-found':
          this.setState({
            alert: 'Invalid username or password'
          });
          break;
        case 'validation':
          this.setState({
            alert: 'Username or password can´t be empty'
          });
          break;
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
        <h2>Log in</h2>
        <p>Welcome back, log in to enter the world of beers!</p>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="section login">
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
            <input type="submit" value="Log in" className="beer-container beer-button beer-top" />
            <p>Don´t have an account yet? 
              <Link to={"/signup"}> Sign up</Link>
            </p>
          </div>
        </form>
        { alert ? <div className="section alert"><h5>{alert}</h5></div> : <div></div>}
      </div>
    )
  }
}

export default withAuth(Login);