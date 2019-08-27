import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './container/Header';
import Signup from './container/auth/Signup';
import Login from './container/auth/Login';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export const Root = () => (
    <Router history={history}>
        <Header />
        <Switch>
            {/* <Route path="/" exact component={HomePage} /> */}
            <Route path="/" exact component={Signup} />
            <Route path="/login" component={Login} />
            {/* <Route path="/" exact component={Header} /> */}
        </Switch>
    </Router>
)

