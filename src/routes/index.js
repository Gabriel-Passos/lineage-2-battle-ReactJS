import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Personagem from '../pages/Profile.personagem';
import Boss from '../pages/Profile.boss';
import Inventario from '../pages/Profile.inventario';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile/itens" component={Itens} />
      <Route path="/profile/personagens" component={Personagem} />

      <Route path="/profile/boss" component={Boss} />
      <Route path="/profile/inventario" component={Inventario} />
    </Switch>
  );
}

export default Routes;
