import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import AppBar from "../Components/AppBar";
import ProductDescription from "../Components/ProductDescription";
export default class routes extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Router>
          <Switch>
            <Route path="/product" component={ProductDescription} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
