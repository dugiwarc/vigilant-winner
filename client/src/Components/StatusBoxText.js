import React, { Component } from "react";

export default class StatusBoxText extends Component {
  render() {
    return (
      <div className="status-box-text">
        <div className="status-box-text-item">
          <div className="property">Status: </div>
          <div className="property-desc">Connected</div>
        </div>
        <div className="status-box-text-item">
          <div className="property">Address: </div>
          <div className="property-desc">224 Lexington St.</div>
        </div>
        <div className="status-box-text-item">
          <div className="property">Balance: </div>
          <div className="property-desc">{this.props.balance} ETH</div>
        </div>
        <div className="status-box-text-item">
          <div className="property">Block #: </div>
          <div className="property-desc">184 </div>
        </div>
      </div>
    );
  }
}
