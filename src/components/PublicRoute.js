import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { withAuth } from '../lib/authContext';

class PublicRoute extends Component {
  render() {
    const {path, component:Component, isLogged, ...rest} = this.props
    return (
      <Route  {...rest } path={path} render={(props)=>{
        return isLogged ? <Redirect to={'/home'} /> : <Component {...props} />
      }} />
    )
  }
}

export default withAuth(PublicRoute);
