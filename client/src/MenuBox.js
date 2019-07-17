import React, { Component } from "react";
import store from "./store";

export default class MenuBox extends Component {
  state = {
    isTransactionsPanelRequested: false,
    transactions: [],
    initialLoad: true
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props)
      this.setState({ transactions: this.props.transactions });
    else console.log("Not match");
    this.state.initialLoad &&
      this.setState({
        transactions: this.props.transactions,
        initialLoad: false
      });
    console.log(this.props);
  }

  render() {
    const { isTransactionsPanelRequested } = this.state;
    const { makeTransaction } = this.props;
    return (
      <div className="menu-box">
        <div className="menu-box-item">Account</div>
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
        <div className="menu-box-item">Services</div>
        <div className="menu-box-item">Network</div>
        <div className="menu-box-item">Settings</div>
        {isTransactionsPanelRequested && (
          <div className="menu-box-panel">
            <div>
              <div className="transaction-title">Transactions</div>
              <div
                className="transaction-close-button"
                onClick={() => {
                  this.setState({ isTransactionsPanelRequested: false });
                  this.setState({
                    transactions: store.getState().appstateReducer.transactions
                  });
                }}
              />
              <div
                className="make-transaction-button"
                onClick={() => {
                  makeTransaction();
                }}
              >
                Make Transaction
              </div>
            </div>
            <div className="transaction-map">
              {this.state.transactions ? (
                this.state.transactions.map((transaction, key) => {
                  return <div key={key}>{transaction}</div>;
                })
              ) : (
                <div>No transaction yet</div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
