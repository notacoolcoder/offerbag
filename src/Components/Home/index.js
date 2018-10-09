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
import OfferCard from "../OfferCard";
import Zomato from "../../Res/Zomato.jpg";
import Swiggy from "../../Res/Swiggy.jpg";
import Paytm from "../../Res/Paytm.png";

const TabPane = Tabs.TabPane;

const shops = [{ link: "/flipkart", img: Amazon }, { img: Flipkart }];

const offers = [
  {
    logo: Zomato,
    description: "Avail 50% OFF (up to ₹150) On Your First Order",
    code: "NEW50"
  },
  {
    logo: Paytm,
    description: "Avail Flat ₹50 Cashback On JIO Recharge Of ₹100 or More.",
    code: "NEWJIO"
  },
  {
    logo: Swiggy,
    description: "Avail 50% Off On Your 1st Three Swiggy Orders",
    code: "GRAB50"
  },
  {
    logo: Zomato,
    description: "Flat 33% OFF On Your First 5 Orders",
    code: "GET33"
  },
  {
    logo: Paytm,
    description: "Flat Rs 75 Cashback On Movie Tickets",
    code: "TICKET75"
  },
  {
    logo: Swiggy,
    description: "Get 20% Cashback Using Paytm",
    code: "PMTREATS"
  },
  {
    logo: Zomato,
    description: "Get 60% Off + Up to Rs.100 Cashback With Paytm",
    code: "PAYTM60"
  }
];

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
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
              }}
            >
              {offers.map(item => (
                <OfferCard
                  logo={item.logo}
                  description={item.description}
                  code={item.code}
                />
              ))}
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
