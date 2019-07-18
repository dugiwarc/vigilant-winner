import React, { Component } from "react";
import drop from "./graphics/drop.png";
import add from "./graphics/add.png";
import close from "./graphics/close.png";
import charge from "./graphics/lightning.png";
import Chart from "./Chart";
import FullStats from "./FullStats";
import TotalChart from "./TotalChart";
import Source from "./Source";

export default class Card extends Component {
  state = { isTinyCard: true, displayFullCard: false };

  render() {
    const { image } = this.props;
    const type = `${
      image === drop ? "water" : image === charge ? "electricity" : "general"
    }`;
    return (
      <div
        className={
          this.state.isTinyCard
            ? `card ${image === drop ? "water" : "electricity"}`
            : `card-full`
        }
        onClick={() =>
          this.setState({
            isTinyCard: false
          })
        }
      >
        {this.state.isTinyCard ? (
          <div className="min-content">
            <div className="card-image">
              <img src={image} alt="drop" />
            </div>
            {image !== add && (
              <div className="card-info">
                <div className="card-info-item">
                  <div className="property">Status:</div>
                  <div className="property-desc">Offline</div>
                </div>
                <div className="card-info-item">
                  <div className="property">Charge:</div>
                  <div className="property-desc">95.5 %</div>
                </div>
                <div className="card-info-item">
                  <div className="property">Tokens#:</div>
                  <div className="property-desc">24</div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {image !== add ? (
              <div className="full-content">
                <img
                  className="close-button"
                  src={close}
                  alt="close"
                  onClick={evt => {
                    evt.stopPropagation();
                    this.setState({ isTinyCard: true });
                  }}
                />
                <FullStats
                  title="Delivery"
                  price="15.16"
                  currency="$"
                  type={type}
                />
                <FullStats
                  title="Supply"
                  price="16.30"
                  currency="$"
                  type={type}
                />
                <FullStats title="Storage" type={type} />
                <TotalChart />
                <Chart />
              </div>
            ) : (
              <div className="full-content">
                <img
                  className="close-button"
                  src={close}
                  alt="close"
                  onClick={evt => {
                    evt.stopPropagation();
                    this.setState({ isTinyCard: true });
                  }}
                />
                <div className="title-add">Add a new source</div>
                <div className="panels-add">
                  <Source type="water" />
                  <Source type="gas" />
                  <Source type="electricity" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
