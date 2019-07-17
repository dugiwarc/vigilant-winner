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
      const taskCount = await contract.methods.taskCount().call();
      for (var i = 1; i <= taskCount; i++) {
        const task = await contract.methods.tasks(i).call();
        this.setState({
          tasks: [...this.state.tasks, task]
        });
      }
      console.log(this.state.tasks);
      this.setState({
        account: accounts[0],
        contract,
        taskCount,
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
      .createTask(content)
      .send({ from: this.state.account })
      .once("receipt", receipt => {
        this.setState({ loading: false });
      });
  };

  makeTransaction = async () => {
    const { accounts, contract, transactions } = this.state;
    this.createTask("Homeless");
    // const parsedTransactions = JSON.stringify(transactions);
    // console.log(parsedTransactions);
    // contract.methods
    //   .set("2fefwegwegwegewg")
    //   .send({ from: accounts[0] })
    //   .on("error", error => {
    //     console.log("error", error);
    //   })
    //   .on("transactionHash", transactionHash => {
    //     console.log("transactionHash", transactionHash);
    //   })
    //   .on("receipt", receipt => {
    //     console.log(receipt.contractAddress);
    //   })
    //   .on("confirmation", (confirmationNumber, receipt) => {
    //     // console.log(confirmationNumber, receipt);
    //     console.log("Added", receipt.transactionHash);
    //     this.props.addTransaction(receipt.transactionHash);
    //     this.setState(
    //       {
    //         transactions: [...this.state.transactions, receipt.transactionHash]
    //       },
    //       () => console.log("Current State: ", this.state.transactions)
    //     );
    //   })
    //   .then(newContractInstance => {
    //     console.log(
    //       "newContractInstance.options.address",
    //       newContractInstance.options.address
    //     );
    //   });

    // contract.methods.set("5").send({ from: accounts[0] });
    // const response = await contract.methods.get().call();
    // console.log("response", response);

    // this.setState(
    //   {
    //     storageValue: this.state.web3.utils.hexToNumber(
    //       this.state.web3.utils.toHex(response)
    //     )
    //   },
    //   () => {
    //     console.log(this.state.storageValue);
    //   }
    // );
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Sidebar makeTransaction={this.makeTransaction} />
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
