import React, { Component } from "react";
import "./index.css";
import Card from "./DailyCard";
import ProductModel1 from "../ProductModel1";
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
        <ProductModel1 />
        <ProductModel1 /> <ProductModel1 /> <ProductModel1 /> <ProductModel1 />{" "}
        <ProductModel1 />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
