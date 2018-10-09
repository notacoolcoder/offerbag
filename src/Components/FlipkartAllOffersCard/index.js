import React, { Component } from "react";
import "./index.css";
import demo from "../../Res/demo.jpeg";
import logo from "../../Res/Flipkart.png";
import { Link } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div className="FkAll-container">
        <div className="FkAll-logo">
          <img
            src={logo}
            style={{ width: "30px", height: "30px", marginTop: "10px" }}
          />
        </div>
        <div className="FkAll-main">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={this.props.imageurl}
              style={{
                width: "80%",
                height: "150px"
              }}
            />
          </div>
          <div
            style={{
              fontSize: "14px",
              textAlign: "center",
              color: "#000",
              fontWeight: "bolder"
            }}
          >
            {this.props.title}
          </div>
          <div
            style={{
              fontSize: "12px",
              textAlign: "center",
              color: "#000",
              marginTop: "5px",
              marginBottom: "10px"
            }}
          >
            {this.props.description}
          </div>

          <div className="commonBuyNow">
            <a
              href={this.props.url}
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    );
  }
}
