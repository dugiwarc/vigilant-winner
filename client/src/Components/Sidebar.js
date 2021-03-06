import React, { Component } from "react";
import MenuBox from "./MenuBox";
import StatusBox from "./StatusBox";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <StatusBox balance={this.props.balance} account={this.props.account} />
        <MenuBox
          makeTransaction={this.props.makeTransaction}
          transactions={this.props.transactions}
        />
      </div>
    );
  }
}
