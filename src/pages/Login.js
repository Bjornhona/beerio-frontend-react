import React, { useState } from 'react';
import auth from '../lib/auth-service';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';

const Login = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    alert: ""
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password} = state;

    auth.login({ username, password })
    .then((user) => {
      props.setUser(user)
      props.history.push('/home'); 
    })
    .catch(error => {
      console.error('Error');
      const { data } = error.response;
      switch(data.error){
        case 'not-found':
          setState(prevState => ({ ...prevState, alert: 'Invalid username or password' }));
          break;
        case 'validation':
          setState(prevState => ({ ...prevState, alert: 'Username or password can´t be empty' }));
          break;
        default:
          setState(prevState => ({ ...prevState, alert: '' }));
      }   
    });
  }

  const handleChange = (event) => {  
    const {name, value} = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="index-div">
      <div className="section">
      <h2>Log in</h2>
      <p>Welcome back, log in to enter the world of beers!</p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="section login">
          <label>Username:</label>
          <input type="text" name="username" value={state.username} onChange={handleChange} />
          <label>Password:</label>
          <input type="password" name="password" value={state.password} onChange={handleChange} />
          <input type="submit" value="Log in" className="beer-container beer-button beer-top" />
          <p>Don´t have an account yet? 
            <Link to={"/signup"}> Sign up</Link>
          </p>
        </div>
      </form>
      { state.alert ? <div className="section alert"><h5>{state.alert}</h5></div> : <div></div>}
    </div>
  )
}

export default withAuth(Login);