import React, { Component } from "react";
import "./index.css";
import CommonCard from "../CommonCard";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;
export default class index extends Component {
  render() {
    return (
      <Tabs className="common-body" defaultActiveKey="1">
        <TabPane tab="Deal of the day" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="All offers" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    );
  }
}
