import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './container/Header';
import Signup from './container/auth/Signup';
import Login from './container/auth/Login';
import { createBrowserHistory } from 'history';
import UserDetails from './container/userDetails/UserDetails';

const history = createBrowserHistory();
export const Root = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Signup} />
            <Route path="/dashboard" exact component={UserDetails} />
            <Route path="/login" component={Login} />
            {/* <Route path="/" exact component={Header} /> */}
        </Switch>
    </Router>
)

