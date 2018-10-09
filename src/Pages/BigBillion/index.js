import React, { Component } from "react";
import "./index.css";
import { Tabs } from "antd";
import data from "./flipkart.json";
import { Link } from "react-router-dom";
const TabPane = Tabs.TabPane;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
    console.log("array", this.state.data);
  }

  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            backgroundImage:
              "linear-gradient( 107deg,  rgba(13,198,180,1) 8.1%, rgba(33,198,138,1) 79.5% )",
            height: "30px",
            textAlign: "center",
            color: "white"
          }}
        >
          <Link style={{ color: "white" }} to="/">
            {" "}
            Back to home
          </Link>
        </div>
        <Tabs defaultActiveKey="1" style={{ width: "100%" }}>
          <TabPane tab="Day 1" key="1">
            <div
              style={{
                fontSize: "17px",
                padding: "10px",
                width: "70%",
                marginRight: "auto"
              }}
            >
              {" "}
              TVs and Appliances
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {this.state.data[0].map(item => (
                <div
                  style={{
                    width: "360px",
                    height: "auto",
                    border: "1px solid #e6e6e6",
                    marginBottom: "10px",
                    padding: "10px",
                    display: "flex",
                    marginTop: "10px",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <h4>{item.title}</h4>
                  <a href={item.url}>
                    {" "}
                    <div className="commonBuyNow" style={{ color: "white" }}>
                      Buy
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: "17px",
                padding: "10px",
                width: "70%",
                marginRight: "auto"
              }}
            >
              {" "}
              Fashion and Lifestyle
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {this.state.data[1].map(item => (
                <div
                  style={{
                    width: "360px",
                    height: "auto",

                    border: "1px solid #e6e6e6",
                    marginBottom: "10px",
                    padding: "10px",
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <h4>{item.title}</h4>
                  <a href={item.url}>
                    {" "}
                    <div className="commonBuyNow" style={{ color: "white" }}>
                      Buy
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: "17px",
                padding: "10px",
                width: "70%",
                marginRight: "auto"
              }}
            >
              {" "}
              Electronics
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {this.state.data[2].map(item => (
                <div
                  style={{
                    width: "360px",
                    height: "auto",
                    border: "1px solid #e6e6e6",
                    marginBottom: "10px",
                    padding: "10px",
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <h4>{item.title}</h4>
                  <a href={item.url}>
                    {" "}
                    <div className="commonBuyNow" style={{ color: "white" }}>
                      Buy
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: "17px",
                padding: "10px",
                width: "70%",
                marginRight: "auto"
              }}
            >
              {" "}
              Home Decor and Furnishing
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {this.state.data[3].map(item => (
                <div
                  style={{
                    width: "360px",
                    height: "auto",
                    border: "1px solid #e6e6e6",
                    marginBottom: "10px",
                    padding: "10px",
                    display: "flex",

                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <h4>{item.title}</h4>
                  <a
                    style={{
                      color: "white"
                    }}
                    href={item.url}
                  >
                    {" "}
                    <div className="commonBuyNow">Buy</div>
                  </a>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tab="Day 2" key="2">
            <div
              style={{
                fontSize: "15px",
                width: "300px",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                margin: "auto",
                backgroundImage:
                  " linear-gradient( 107deg,  rgba(13,198,180,1) 8.1%, rgba(33,198,138,1) 79.5% )"
              }}
            >
              {" "}
              Stay tuned Content will be updated in a day
            </div>
          </TabPane>
          <TabPane tab="Day 3" key="3">
            <div
              style={{
                fontSize: "15px",
                width: "300px",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                margin: "auto",
                backgroundImage:
                  " linear-gradient( 107deg,  rgba(13,198,180,1) 8.1%, rgba(33,198,138,1) 79.5% )"
              }}
            >
              {" "}
              Stay tuned Content will be updated in 2 days
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
