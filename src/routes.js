import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';

const history = createBrowserHistory();

export default function Routes() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}
