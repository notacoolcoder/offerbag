import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import CommonCard from "../CommonCard";
import moment from "moment";
import { dealOfTheDay, headers, allOffers } from "../../Utils/config";
import { Tabs, Spin, Carousel, List, Icon } from "antd";
import Amazon from "../../Res/Amazon-Logo.jpg";
import Flipkart from "../../Res/Flipkart.png";
import FkAll from "../FlipkartAllOffersCard";
import OfferCard from "../OfferCard";
import Zomato from "../../Res/Zomato.jpg";
import Swiggy from "../../Res/Swiggy.jpg";
import Paytm from "../../Res/Paytm.png";
import a from "../../Res/both.jpg";
import b from "../../Res/billion1.jpg";
import c from "../../Res/bigbillion.jpeg";
import d from "../../Res/billion2.jpg";
import e from "../../Res/GIS.jpg";
import f from "../../Res/GIS1.jpg";
import kfcoffer from "../../Res/kfcoffer.png";

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
const Sale = [
  { img: a },
  { img: b },
  { img: e },
  { img: d },
  { img: c },
  { img: f }
];
const data = [
  {
    description: "Valid at all KFC outlets."
  },
  {
    description:
      "Valid on 1 Chicken Zinger Burger with 2 Pieces of Chicken Hot wings & 1 7up Krush Lime Soda."
  },
  {
    description:
      "Use promocode KFC025 to get instant Rs.79 cashback and movie voucher worth Rs.100"
  },
  {
    description: "Valid for 1 person and for Dine-in & Takeaway only."
  },
  {
    description: "Valid till 30th October 2018."
  }
];

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      empty: true,
      shops: [],
      allOffers: [],
      view: true
    };
  }
  onToggle = () => {
    this.setState({ view: !this.state.view });
  };

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
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div style={{ width: "360px", height: "250px" }}>
              <Carousel autoplay>
                {Sale.map(item => (
                  <div>
                    <img
                      style={{ width: "360px", height: "250px" }}
                      src={item.img}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "16px",
                color: "#51665E"
              }}
            >
              Exclusive deal
            </div>
            <div
              style={{
                width: "360px",
                height: "auto",
                padding: "10px",
                border: "1px solid #e6e6e6",
                borderRadius: "5px"
              }}
            >
              <img style={{ width: "330px" }} src={kfcoffer} />
              <h5>
                KFC Chicken Zinger Combo Offer + Flat Rs.100 Movie Voucher+79
                Cashback
              </h5>
              <h4>
                <strike>Rs 179/-</strike>
              </h4>
              <h4 style={{ color: "red" }}>Rs 0</h4>
              {this.state.view ? (
                <h3
                  style={{ color: "#4AC99D", cursor: "pointer" }}
                  onClick={this.onToggle}
                >
                  Click to Get this offer
                </h3>
              ) : (
                <div>
                  <h5>Product Highlights</h5>
                  <List
                    style={{ fontSize: "9px" }}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta description={item.description} />
                      </List.Item>
                    )}
                  />

                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://paytmmall.com/shop/p/chicken-zinger-combo-DEACHICKEN-ZINGNEAR76288127A68F3D"
                  >
                    {" "}
                    <div className="commonBuyNow">Buy Now</div>{" "}
                  </a>
                  <Icon
                    onClick={this.onToggle}
                    style={{
                      marginTop: "20px",
                      fontSize: "33px",
                      cursor: "pointer"
                    }}
                    type="caret-up"
                    theme="outlined"
                  />
                </div>
              )}
            </div>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "16px",
                color: "#51665E"
              }}
            >
              Featured
            </div>
            <img src={c} style={{ width: "360px", height: "200px" }} />
            <img
              src={e}
              style={{ width: "360px", height: "200px", marginTop: "10px" }}
            />
          </TabPane>

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
