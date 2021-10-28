import React, { useState } from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Main } from '../../pages/main/index';
import { Canvas } from '../../pages/canvas/index';
import { selectWallet } from '../../state/reducers/selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const wallet = useSelector(selectWallet);

  return (
    <BrowserRouter>
      <Route path="/" component={Main} exact />
      {wallet !== '' ? <Route path="/canvas" component={Canvas} exact /> : null}
    </BrowserRouter>
  );
};

export default App;
