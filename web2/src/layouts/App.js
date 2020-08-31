import React, { Component } from "react";
import Loadable from 'react-loadable';
import { Route, Redirect, Switch } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import requireAuth from '../redux/utils/requireAuth';
import validateLogge from '../redux/utils/requireLogge';
const Loading = () => <div className="container"><div className="section"><h2 className="title">Cargando...</h2></div></div>;

const Skeleton = Loadable({
  loader: () => import('../containers/skeleton'),
  loading: Loading
});

export default class App extends Component {
  render () {
    return(
      <Switch>
        <Route path="/login" component={validateLogge(LoginPage)} />
        <Route path="/umbra" component={requireAuth(Skeleton)} />
        <Redirect from="/" to="login" />
      </Switch>
    );
  }
}
