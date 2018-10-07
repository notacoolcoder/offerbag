import React, { Component } from "react";
import "./index.css";
import { Carousel, Input } from "antd";
import demo from "../../Res/demo.jpeg";
import Company from "../../Res/images.png";
export default class index extends Component {
  render() {
    return (
      <div className="common-body" style={{ padding: "5px" }}>
        <h3 style={{ textAlign: "center" }}>Product Name</h3>
        <div className="product-image">
          <img
            style={{ width: "350px", height: "245px", position: "fixed" }}
            src={demo}
          />
          <img src={Company} style={{ width: "100px", position: "relative" }} />
          <div
            style={{
              width: "50%",
              height: "47px",
              position: "relative",
              top: "200px",
              textAlign: "center",
              backgroundColor: "#51665E",
              color: "white"
            }}
          >
            <div>Price</div>
            <div>500rs</div>
          </div>
          <div
            style={{
              width: "50%",
              height: "47px",
              position: "relative",
              top: "153px",
              left: "50%",
              textAlign: "center",
              backgroundColor: "#4AC99D",
              color: "white"
            }}
          >
            <div>Deal Price</div>
            <div>500rs</div>
          </div>
          <div
            style={{
              width: "5rem",
              height: "2rem",
              backgroundColor: "#81fdce",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              top: "-148px",
              left: "78%",
              color: "white",
              fontWeight: "bolder"
            }}
          >
            40%
          </div>
        </div>
      </div>
    );
  }
}
