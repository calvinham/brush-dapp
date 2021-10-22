import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Home } from '../../pages/home/index';
import { Canvas } from '../../pages/canvas/index';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/canvas" component={Canvas} />
    </BrowserRouter>
  );
};

export default App;
