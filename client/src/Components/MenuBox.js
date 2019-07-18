import React, { Component } from "react";
import tag from "./graphics/tag.png";
import close from "./graphics/close.png";
import blockchain from "./graphics/blockchain.png";
import gasStation from "./graphics/gasStation.png";

export default class MenuBox extends Component {
  state = {
    isTransactionsPanelRequested: false,
    transactions: [],
    initialLoad: true
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props)
      this.setState({ transactions: this.props.transactions });
    this.state.initialLoad &&
      this.setState({
        transactions: this.props.transactions,
        initialLoad: false
      });
  }

  render() {
    const { isTransactionsPanelRequested } = this.state;
    const { makeTransaction } = this.props;
    return (
      <div className="menu-box">
        <div
          className="menu-box-item"
          onClick={() => {
            this.setState({
              isTransactionsPanelRequested: true
            });
          }}
        >
          Transactions
        </div>
        <div className="menu-box-item">Properties</div>
        <div className="menu-box-item">Network</div>
        <div className="menu-box-item">Support</div>
        <div className="menu-box-item">Settings</div>
        {isTransactionsPanelRequested && (
          <div className="menu-box-panel">
            <div className="menu-box-panel-head">
              <div className="transaction-title">Transactions</div>
              <div className="transaction-details">
                <div className="transaction-details-item">
                  <div className="property">Status:</div>
                  <div className="property-info">Connected</div>
                </div>
                <div className="transaction-details-item">
                  <div className="property">Last update: </div>
                  <div className="property-info">5 seconds ago</div>
                </div>
                <div className="transaction-details-item">
                  <div className="property">Transaction #: </div>
                  <div className="property-info">245</div>
                </div>
              </div>
              <div
                className="transaction-close-button"
                onClick={() => {
                  this.setState({ isTransactionsPanelRequested: false });
                }}
              >
                <img src={close} alt="close-button" />
              </div>
              <div
                className="make-transaction-button"
                onClick={() => {
                  makeTransaction();
                }}
              >
                <span className="make-transaction-button-text">
                  Make Transaction
                </span>
              </div>
            </div>
            {this.state.transactions ? (
              <div className="transaction-map">
                {this.state.transactions.map((transaction, key) => {
                  if (transaction.transactionHash) {
                    return (
                      <div key={key} className="transaction-map-block">
                        <div className="transaction-map-hash">
                          <div>
                            <img src={tag} alt="tag" />
                          </div>
                          {transaction.transactionHash}
                        </div>
                        <div className="transaction-map-blocknumber">
                          <div>
                            <img src={blockchain} alt="blockchain" />
                          </div>
                          {transaction.blockNumber}
                        </div>
                        <div className="transaction-map-gas">
                          <div>
                            <img src={gasStation} alt="gas-station" />
                          </div>
                          {transaction.gasUsed}
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            ) : (
              <div className="transaction-empty-map">
                Click Make Transaction button to start
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
