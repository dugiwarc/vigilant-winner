import React, { Component } from "react";
import Card from "./Card";
import add from "./graphics/add.png";
import drop from "./graphics/drop.png";
import charge from "./graphics/lightning.png";
import Hub from "./Hub";

export default class Panel extends Component {
  state = {
    displayFullCard: false
  };
  render() {
    return (
      <div className="panel">
        <div className="cards">
          <Card image={charge} />
          <Card image={drop} />
          <Card image={add} />
        </div>
        <div className="hubs">
          <Hub />
          <Hub />
          <Hub />
          <Hub />
          <Hub />
        </div>
      </div>
    );
  }
}
