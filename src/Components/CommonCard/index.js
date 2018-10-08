import React, { Component } from "react";
import "./index.css";
import demo from "../../Res/demo.jpeg";
import logo from "../../Res/images.png";
import { Link } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div className="ProductCard1-main">
        <div>
          <img
            src={this.props.imageurl}
            style={{ width: "100%", height: "150px" }}
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
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          {this.props.description}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              fontSize: "10px",
              textAlign: "center",
              color: "#000",
              width: "45%",
              borderStyle: "dashed",
              border: "1px solid #00976F",

              borderRadius: "4px",
              height: "26px",
              paddingTop: "3px"
            }}
          >
            expires <br /> {this.props.time}
          </div>

          <div
            style={{
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",

              width: "45%",
              height: "27px",

              padding: "1px",
              borderRadius: "4px",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#247C65"
            }}
          >
            <Link
              to="/product"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Details
            </Link>
          </div>
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
          <div
            style={{
              width: "50%",
              height: "25px",
              textAlign: "center",
              marginTop: "10px"
            }}
          >
            <a
              href={this.props.url}
              style={{
                textDecoration: "none",
                color: "#4AC99D"
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
