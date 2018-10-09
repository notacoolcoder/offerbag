import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  render() {
    return (
      <div
        className="OfferCard-main"
        style={{
          maxWidth: "360px",
          width: "100%",
          minHeight: "40px",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          marginBottom: "10px",
          marginRight: 5
        }}
      >
        {" "}
        <img
          style={{ width: "60px", height: "30px", marginRight: "5px" }}
          src={this.props.logo}
        />
        <div style={{ fontSize: "14px" }}>{this.props.description}</div>
        <div
          style={{
            height: "30px",
            width: "80px",
            border: "2px dashed #e6e6e6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {this.props.code}
        </div>
      </div>
    );
  }
}
