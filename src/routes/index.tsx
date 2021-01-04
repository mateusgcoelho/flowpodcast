import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Episodes from '../pages/Episodes';
import EpisodeView from '../pages/EpisodeView';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/episodes" exact component={Episodes} />
      <Route path="/episodes/matue" exact component={EpisodeView} />
    </Switch>
  );
};

export default Routes;
