import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import AuthPage from '../AuthPage/AuthPage';

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <PrivateRoute path="/user/dex157"/>
                    <PrivateRoute path="/user/:name" />
                    <Route exact path="/login" component={AuthPage}/>
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    }
}
