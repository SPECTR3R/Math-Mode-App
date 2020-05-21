import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from '../services/AuthService';
import { useHistory } from 'react-router-dom';

const PrivateRoute = ({ component, ...options }) => {
  const history = useHistory();
  const { user } = useAuth();
  if (!user) {
    history.push('/auth/login');
  }
  return <Route {...options} component={component} />;
};
export default PrivateRoute;
