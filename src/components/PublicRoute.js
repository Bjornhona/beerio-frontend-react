import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { withAuth } from '../lib/authContext';

const PublicRoute = (props) => {
  const {path, component:Component, isLogged, ...rest} = props;

  return (
    <Route  {...rest } path={path} render={(props) => {
      return isLogged ? <Redirect to={'/home'} /> : <Component {...props} />
    }} />
  );
}

export default withAuth(PublicRoute);
