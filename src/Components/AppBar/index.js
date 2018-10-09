import React, { Component } from "react";
import "./index.css";
import textLogo from "../../Res/textlogo.png";
export default class index extends Component {
  render() {
    return (
      <div className="appbar-main">
        <img src={textLogo} />
        {/* <h3 style={{ color: "white" }}>OfferBag</h3> */}
      </div>
    );
  }
}
