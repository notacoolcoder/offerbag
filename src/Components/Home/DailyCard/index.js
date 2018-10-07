import React, { Component } from "react";
import "./index.css";
import demo from "../../../Res/demo.jpeg";
import { Link } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div className="DailyCard-main">
        <img src={demo} style={{ width: "100%", height: "50%" }} />
        <div style={{ width: "100%", height: "50%" }}>
          <div style={{ fontSize: "14x", fontWeight: "bold" }}>
            Product Name
          </div>
          <div style={{ fontSize: "12px", wordWrap: "break-word" }}>
            bbjkbjbjhbhjbjhbjhbjhbjhbjhbjhbjhbjhbjhbjhbjhjhbjhb
          </div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#00976f",
              color: "white"
            }}
          >
            4 days Left
          </div>
          <div
            style={{
              display: "flex",
              color: "red",
              justifyContent: "space-between"
            }}
          >
            <div style={{ color: "#307f63" }}>Buy Now</div>
            <div>46% offer</div>
          </div>
        </div>
      </div>
    );
  }
}
