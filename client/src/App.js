import React, { Component } from 'react';
import SimpleStorageContract from './contracts/SimpleStorage.json';
import getWeb3 from './utils/getWeb3';
import household from './graphics/house.png';
import drop from './graphics/drop.png';
import charge from './graphics/lightning.png';
import add from './graphics/add.png';
import Card from './Card';

import './styles/main.css';

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    displayFullCard: false
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    console.log('runExample');
    // const { accounts, contract } = this.state;

    // // Stores a given value, 5 by default.
    // contract.methods.set(5).send({ from: accounts[0] });

    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // // Update state with the result.
    // this.setState({
    //   storageValue: this.state.web3.utils.hexToNumber(
    //     this.state.web3.utils.toHex(response)
    //   )
    // });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className='App'>
        <div className='sidebar'>
          <div className='status-box'>
            <div className='status-box-image'>
              <img src={household} alt='house' />
            </div>
            <div className='status-box-address'>
              0x
              <br />
              6d4D76b888E6eB9E596a41F73072EEd0d3102429
            </div>
            <div className='status-box-text'>
              <div className='status-box-text-item'>
                <div className='property'>Status: </div>
                <div className='property-desc'>Connected</div>
              </div>
              <div className='status-box-text-item'>
                <div className='property'>Address: </div>
                <div className='property-desc'>224 Lexington St.</div>
              </div>
              <div className='status-box-text-item'>
                <div className='property'>Balance: </div>
                <div className='property-desc'>99.70 ETH</div>
              </div>
              <div className='status-box-text-item'>
                <div className='property'>Block #: </div>
                <div className='property-desc'>184 </div>
              </div>
            </div>
          </div>
          <div className='menu-box'>
            <div className='menu-box-item'>Account</div>
            <div className='menu-box-item'>Transactions</div>
            <div className='menu-box-item'>Services</div>
            <div className='menu-box-item'>Network</div>
            <div className='menu-box-item'>Settings</div>
          </div>
        </div>
        <div className='navbar'>
          <div className='navbar-welcome'>
            <div className='navbar-title'>Dashboard</div>
            <div className='navbar-subtitle'>Hello, John</div>
          </div>
          <div className='navbar-logout'>
            <div>Log out</div>
          </div>
        </div>
        <div className='panel'>
          <Card image={charge} />
          <Card image={drop} />
          <div
            className={this.state.displayFullCard ? 'card-full' : 'card'}
            onClick={() => {
              this.setState({ displayFullCard: true }, () => {
                console.log('oopsie');
              });
            }}
          >
            {this.state.displayFullCard ? (
              <div className='full-content'>
                <div
                  className='button-leave'
                  onClick={evt => {
                    evt.stopPropagation();
                    this.setState({ displayFullCard: false }, () => {
                      console.log('clicked');
                    });
                  }}
                >
                  X
                </div>
              </div>
            ) : (
              <img src={add} alt='add' />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
