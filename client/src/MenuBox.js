import React, { Component } from 'react';

export default class MenuBox extends Component {
  render() {
    return (
      <div className='menu-box'>
        <div className='menu-box-item'>Account</div>
        <div className='menu-box-item'>Transactions</div>
        <div className='menu-box-item'>Services</div>
        <div className='menu-box-item'>Network</div>
        <div className='menu-box-item'>Settings</div>
      </div>
    );
  }
}
