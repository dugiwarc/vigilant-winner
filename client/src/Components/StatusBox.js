import React, { Component } from "react";
import StatusBoxText from "./StatusBoxText";
import user from "./graphics/user.png";

export default class StatusBox extends Component {
  render() {
    return (
      <div className="status-box">
        <div className="status-box-image">
          <img src={user} alt="house" />
        </div>
        <div className="status-box-address">
          0x
          <br />
          {this.props.account.slice(2)}
        </div>
        <StatusBoxText balance={this.props.balance} />
      </div>
    );
  }
}
