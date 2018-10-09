import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import AppBar from "../Components/AppBar";
import BigBillion from "../Pages/BigBillion";

export default class routes extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Router>
          <Switch>
            <Route path="/bigbillion" exact component={BigBillion} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
