import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import Sidebar from "./Sidebar";
import Web3 from "web3";

import Navbar from "./Navbar";
import Panel from "./Panel";

import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config";
import { connect } from "react-redux";
import store from "./store";
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
      const getContent = JSON.parse(content);
      console.log("getContent", getContent);
      this.state.transactions.length < 1 &&
        this.setState({
          transactions: getContent
        });
      // for (var i = 1; i <= taskCount; i++) {
      //   const task = await contract.methods.tasks(i).call();
      //   this.setState({
      //     tasks: [...this.state.tasks, task]
      //   });
      // }
      console.log("content", content);
      this.setState({
        account: accounts[0],
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
        this.props.addTransaction(transactionHash);
        this.setState(
          {
            transactions: [
              ...this.state.transactions.filter(
                item => item !== transactionHash
              ),
              transactionHash
            ]
          },
          () => {
            console.log("Current State: ", this.state.transactions);
          }
        );
      })
      .on("receipt", receipt => {
        console.log("receipt.contractAddress", receipt.contractAddress);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log("Added", receipt.transactionHash);
      })
      .then(newContractInstance => {
        console.log(
          "newContractInstance.options.address",
          newContractInstance.options.address
        );
      });
  };

  makeTransaction = async () => {
    this.createTask(JSON.stringify(this.state.transactions));
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
