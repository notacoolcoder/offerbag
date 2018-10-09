import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import CommonCard from "../CommonCard";
import moment from "moment";
import { dealOfTheDay, headers, allOffers } from "../../Utils/config";
import { Tabs, Spin } from "antd";
import Amazon from "../../Res/Amazon-Logo.jpg";
import Flipkart from "../../Res/Flipkart.png";
import FkAll from "../FlipkartAllOffersCard";

const TabPane = Tabs.TabPane;

const shops = [{ link: "/flipkart", img: Amazon }, { img: Flipkart }];

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      empty: true,
      shops: [],
      allOffers: []
    };
  }

  componentDidMount() {
    var that = this;
    // fetch(dealOfTheDay)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     that.setState({ data: data.dotdList });
    //   })
    //   .catch(err => {
    //     console.log("err", err);
    //   });
    fetch(allOffers)
      .then(res => {
        console.log("res", res);
        return res.json();
      })
      .then(data => {
        console.log("data", data);
        that.setState({ allOffers: data.allOffersList, empty: false });
      });
  }
  render() {
    return (
      <div
        style={{
          padding: "5px"
        }}
      >
        <Tabs
          defaultActiveKey="1"
          style={{ width: "100%", textAlign: "center" }}
        >
          <TabPane
            tab="Home"
            key="1"
            style={{ display: "flex", flexWrap: "wrap" }}
          />
          <TabPane tab="All Deals" key="2">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
              }}
            >
              {this.state.empty ? (
                <div style={{ alignSelf: "center", marginTop: 20 }}>
                  <Spin />
                </div>
              ) : (
                this.state.allOffers.map(item => (
                  <FkAll
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    imageurl={item.imageUrls[0].url}
                  />
                ))
              )}
            </div>
          </TabPane>
          {/* <TabPane tab="Shop by Shop" key="3">
            <div
              className="common-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {shops.map(item => (
                <div className="Shop-card">
                  <img src={item.img} />
                </div>
              ))}
            </div>
          </TabPane> */}
          <TabPane tab="Coupons" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
