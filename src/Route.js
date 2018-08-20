import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./auth/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sign-up" exact component={Register} />
    <Route path="/sign-in" exact component={Login} />
  </Switch>;