import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import AppBar from "../Components/AppBar";

export default class routes extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
