import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './Header';
import Router from './Router';

const App = () => (
  <HashRouter>
    <Header />
    <Router />
  </HashRouter>
);

export default App;
