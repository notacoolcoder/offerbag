import React, { Component } from "react";
import "./index.css";

import CommonCard from "../CommonCard";
import moment from "moment";

const data = {
  dotdList: [
    {
      title: "Just Rs. 249",
      description: "Bluetooth selfie sticks",
      url:
        "http://dl.flipkart.com/dl/camera-accessories/smile-n-click~brand/pr?p%5B%5D=facets.price_range%255B%255D%3DBelow%2BRs.%2B1000&sid=jek%2C6l2&filterNone=true&offer=ns%3A10e40dc418&affid=keshav",
      imageUrls: [
        {
          url:
            "http://img.fkcdn.com/image/selfie-stick/z/u/7/h-s203-smile-n-click-original-imaeagh9yg8k2t8z.jpeg",
          resolutionType: "default"
        },
        {
          url:
            "https://rukminim1.flixcart.com/image/200/200/selfie-stick/z/u/7/h-s203-smile-n-click-original-imaeagh9yg8k2t8z.jpeg?q=90",
          resolutionType: "low"
        },
        {
          url:
            "https://rukminim1.flixcart.com/image/400/400/selfie-stick/z/u/7/h-s203-smile-n-click-original-imaeagh9yg8k2t8z.jpeg?q=90",
          resolutionType: "mid"
        },
        {
          url:
            "https://rukminim1.flixcart.com/image/800/800/selfie-stick/z/u/7/h-s203-smile-n-click-original-imaeagh9yg8k2t8z.jpeg?q=90",
          resolutionType: "high"
        }
      ],
      availability: "LIVE"
    }
  ]
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return (
      <div
        className="common-body"
        style={{
          padding: "5px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <CommonCard
          title="Up to 30% off"
          description="From Formula1From"
          url="http://dl.flipkart.com/dl/automotive/accessories-spare-parts/car-bike-care/pr?p%5B%5D=facets.brand%255B%255D%3DFormula%2B1&p%5B%5D=facets.brand%255B%255D%3DFormula1&sid=0hx%2Cbwd%2Cbyn&filterNone=true&affid=keshav"
          imageurl="https://rukminim1.flixcart.com/image/800/800/scratch-remover-wax/a/h/v/formula-1-227-scratch-out-original-imae3728msy6fh4v.jpeg?q=90"
        />
        {this.state.data.dotdList.map(item => (
          <CommonCard
            title={item.title}
            description={item.description}
            url={item.url}
            imageurl={item.imageUrls[0].url}
            time={moment()
              .endOf("day")
              .fromNow()}
          />
        ))}
      </div>
    );
  }
}
