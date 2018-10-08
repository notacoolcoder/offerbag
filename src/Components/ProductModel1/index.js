import React, { Component } from "react";
import "./index.css";
import demo from "../../Res/demo.jpeg";
import logo from "../../Res/images.png";
export default class index extends Component {
  render() {
    return (
      <div className="ProductCard1-main">
        <div>
          <img
            src={demo}
            style={{ width: "100%", height: "90px", position: "relative" }}
          />
        </div>
        <div
          style={{
            fontSize: "14px",
            textAlign: "center",
            color: "#000",
            position: "relative",
            top: "5%",
            fontWeight: "bolder"
          }}
        >
          Hello
        </div>
        <div
          style={{
            fontSize: "10px",
            textAlign: "center",
            color: "#000",
            position: "relative",
            top: "5%"
          }}
        >
          Hello this is the product description
        </div>
        <div
          style={{
            fontSize: "10px",
            textAlign: "center",
            color: "#000",
            width: "45%",
            position: "relative",
            top: "7%",
            borderStyle: "dashed",
            border: "1px solid #00976F",

            borderRadius: "4px",
            height: "26px",
            paddingTop: "3px"
          }}
        >
          expires on <br /> 08-11-2016
        </div>
        <div
          style={{
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#000",
            width: "45%",
            height: "27px",
            position: "relative",
            top: "-8%",
            left: "50%",

            padding: "1px",
            borderRadius: "4px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#247C65"
          }}
        >
          Details
        </div>
        <div
          style={{
            fontSize: "14px",
            width: "100%",
            height: "20px",

            color: "#4AC99D",
            position: "relative",
            top: "-6%",
            fontWeight: "bolder",
            display: "flex"
          }}
        >
          <img src={logo} style={{ width: "50%" }} />
          <div style={{ width: "50%", textAlign: "center", marginTop: "2px" }}>
            Buy Now
          </div>
        </div>
      </div>
    );
  }
}
