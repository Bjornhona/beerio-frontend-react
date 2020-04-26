import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../lib/authContext';

const Signup = (props) => {

  const [state, setState] = useState({
    username: "",
    password: "",
    alert: ""
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password} = state;

    auth.signup({ username, password })
      .then((user) => {
        setState(prevState => ({ ...prevState, username: '', password: '' }));
        props.setUser(user);
        props.history.push('/home');
      })
      .catch( error => {
        console.error('Error');
        const { data } = error.response;
        switch(data.error){
          case 'empty':
            setState(prevState => ({ ...prevState, alert: 'Username or password can´t be empty' }));
            break;
          case 'username-not-unique':
            setState(prevState => ({ ...prevState, alert: 'User already exists' }));
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

  const { username, password, alert } = state;
  return (
    <div className="index-div">
      <div className="section">
        <h2>Sign up</h2>
        <p>Become a part of this world of beers and sign up today!</p>
        <form onSubmit={handleFormSubmit} className="signup">
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={handleChange} />
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleChange} />
          <input type="submit" value="Sign up" className="beer-container beer-button beer-top" />
          <p>Already have account? 
            <Link to={"/login"}> Log in</Link>
          </p>
        </form>
        { alert ? <div className="section alert"><h5>{alert}</h5></div> : <div></div>}
      </div>
    </div>
  );
}

export default withAuth(Signup);