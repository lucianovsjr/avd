import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Avaliacao from './pages/Avaliacao';
import Configurador from './pages/Configurador';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/avaliacao/:id" component={Avaliacao}/>
      <Route path="/configurador" component={Configurador}/>
    </Switch>
  );
}
