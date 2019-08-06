import React from 'react';
import { Route, Switch } from 'react-router-dom';

import useAuth from './firebase/useAuth';
import productEntityType from './entitityTypes/product';
import EntityList from './crud/EntityList';

const SignInPage = () => (
  <h1>You must be signed in to use this page.</h1>
);

const HomePage = ({a}) => (
  <h1>Home {a}</h1>
);

const PrivateRoute = ({ component, ...options }) => {
  const auth = useAuth();
  if (!auth.isLoaded) return 'Loading...';
  return <Route {...options} component={auth.user ? component : SignInPage} />;
};

const Router = () => (
  <Switch>
    <Route path="/" exact component={HomePage} a={352} />
    <PrivateRoute path="/products" render={(props) => <EntityList {...props} entityType={productEntityType} />} />
  </Switch>
);

export default Router;
