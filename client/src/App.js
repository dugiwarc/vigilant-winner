import React, { Component } from "react";
import Sidebar from "./Components/Sidebar";
import Web3 from "web3";

import Navbar from "./Components/Navbar";
import Panel from "./Components/Panel";

import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config";
import { connect } from "react-redux";
import { getTransactions, addTransaction } from "./actions/actions";

import "./styles/main.css";

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: "",
    taskCount: 0,
    content: "",
    tasks: [],
    contract: null,
    displayFullCard: false,
    accountBalance: 0,
    transactions: []
  };

  componentWillMount = async () => {
    this.loadBlockChainData();
  };

  async loadBlockChainData() {
    try {
      const web3 = new Web3(Web3.givenProvider);
      const accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
      const content = await contract.methods.content().call();
      const getContent = content.length > 0 ? JSON.parse(content) : "";
      const balanceInWei = await web3.eth.getBalance(accounts[0]);
      const convertedToEtherBalance = await web3.utils.fromWei(
        balanceInWei,
        "ether"
      );
      this.state.transactions.length < 1 &&
        this.setState({
          transactions: getContent
        });

      console.log("content", content);
      this.setState({
        account: accounts[0],
        balance: convertedToEtherBalance,
        contract,
        content,
        loading: false,
        web3
      });
    } catch (error) {
      console.log(error);
    }
  }

  createTask = content => {
    this.setState({ loading: true });
    this.state.contract.methods
      .addTransaction(content)
      .send({ from: this.state.account })
      .on("transactionHash", transactionHash => {
        console.log("transactionHash", transactionHash);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        const transaction = {
          transactionHash: receipt.transactionHash,
          blockNumber: receipt.blockNumber,
          gasUsed: receipt.gasUsed,
          status: receipt.status
        };
        console.log("Added", receipt);
        console.log("Transaction", transaction);
        this.props.addTransaction(transaction);
        this.state.transactions
          ? this.setState(
              {
                transactions: [
                  transaction,
                  ...this.state.transactions.filter(
                    item => item.transactionHash !== transaction.transactionHash
                  )
                ]
              },
              () => {
                console.log("Current State: ", this.state.transactions);
              }
            )
          : this.setState({
              transactions: [transaction, ...this.state.transactions]
            });
      });
  };

  makeTransaction = async () => {
    const content = JSON.stringify(this.state.transactions);
    console.log("Sending to blockchain", content);
    this.createTask(content);
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Sidebar
          makeTransaction={this.makeTransaction}
          transactions={this.state.transactions}
          balance={this.state.balance}
          account={this.state.account}
        />
        <Navbar />
        <Panel />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(
  mapStateToProps,
  { getTransactions, addTransaction }
)(App);
