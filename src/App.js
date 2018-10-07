import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./Components/AppBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
      </div>
    );
  }
}

export default App;
