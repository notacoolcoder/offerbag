import React, { Component } from "react";
import "./index.css";
import Card from "./DailyCard";
export default class index extends Component {
  render() {
    return (
      <div
        className="common-body"
        style={{
          padding: "5px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
