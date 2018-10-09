import React, { Component } from "react";
import "./index.css";
import demo from "../../Res/demo.jpeg";
import logo from "../../Res/Flipkart.png";
import { Link } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
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

        <div
          style={{
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",

            width: "100%",
            height: "27px",
            border: "1px solid #00976F",
            padding: "1px",
            borderRadius: "4px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#247C65"
          }}
        >
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

        <div
          style={{
            fontSize: "14px",
            width: "100%",
            minHeight: "20px",
            height: "auto",
            color: "#4AC99D",

            fontWeight: "bolder",
            display: "flex"
          }}
        >
          <img
            src={logo}
            style={{ width: "50%", height: "25px", marginTop: "10px" }}
          />
        </div>
      </div>
    );
  }
}
