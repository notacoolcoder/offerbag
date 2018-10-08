import React, { Component } from "react";
import "./index.css";
import { Carousel, Input } from "antd";
import demo from "../../Res/demo.jpeg";
import Company from "../../Res/images.png";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Product Name",
      description:
        "hello this is the product description hello this is the product hello this is the product description",
      timeleft: "2 days"
    };
  }
  render() {
    return (
      <div className="common-body" style={{ padding: "5px" }}>
        <h3 style={{ textAlign: "center" }}>{this.state.title}</h3>
        <div className="product-image">
          <img
            style={{ width: "100%", height: "245px", position: "relative" }}
            src={demo}
          />
          <img
            src={Company}
            style={{ width: "100px", position: "relative", top: "-245px" }}
          />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bolder",
              width: "100%",
              height: "47px",
              position: "relative",
              top: "-49px",
              textAlign: "center",
              alignItems: "center",
              backgroundColor: "#51665E",
              color: "white",
              display: "flex",
              justifyContent: "center"
            }}
          >
            {this.state.timeleft}
          </div>
          <div
            style={{
              width: "50%",
              height: "47px",
              position: "relative",
              top: "-96px",
              left: "50%",
              textAlign: "center",
              backgroundColor: "#4AC99D",
              color: "white",
              display: "none"
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
              top: "-396px",
              left: "78%",
              color: "white",
              fontWeight: "bolder",
              display: "none"
            }}
          >
            40%
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontSize: "20px",
            color: "#51665E"
          }}
        >
          <div style={{ marginBottom: "10px" }}>Product Description</div>
          <div
            style={{
              fontSize: "14px",

              width: "80%",
              margin: "auto"
            }}
          >
            {this.state.description}
          </div>
          <div
            style={{
              width: "100%",
              height: "40px",
              marginTop: "30px",
              color: "white",
              backgroundColor: "#4AC99D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px"
            }}
          >
            Buy Now
          </div>
        </div>
      </div>
    );
  }
}
