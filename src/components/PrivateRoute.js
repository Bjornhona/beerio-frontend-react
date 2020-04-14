import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { withAuth } from '../lib/authContext';

const PrivateRoute = (props) => {
    const {path, component:Component, isLogged, ...rest} = props;

  return (
    <Route  {...rest } path={path} render={(props)=>{
      return isLogged ? <Component {...props} /> : <Redirect to={'/login'} />
    }} />
  );
}

export default withAuth(PrivateRoute);
