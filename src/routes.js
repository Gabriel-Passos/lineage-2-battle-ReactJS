import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Inventario from './components/ProfilePage/Inventario';
import Personagem from './pages/Pesonagem.profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/profile/itens" component={Inventario} />
                <Route path="/profile/personagens" component={Personagem} />
            </Switch>
        </BrowserRouter>
    );
}
