import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar';
import MenuBar from './components/MenuBar';
import Index from './pages/Index';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Favorites from './pages/Favorites';
import Beer from './pages/Beer';
import Play from './pages/Play';

import AuthContext from './lib/authContext';

class App extends Component {
  render() {
    return (
      <AuthContext>
        <div className="container">
        <MenuBar />
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />     
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute exact path="/beers" component={Beers} />
              <PrivateRoute path="/favorites" component={Favorites} />
              <PrivateRoute path="/beers/id" component={Beer} />
              <PrivateRoute path="/play" component={Play} />
            </Switch>
          </div>
        </div>
      </AuthContext>
    )
  }
}

export default App;
