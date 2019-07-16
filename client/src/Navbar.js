import React, { Component } from 'react';
export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar-welcome'>
          <div className='navbar-title'>Dashboard</div>
          <div className='navbar-subtitle'>Hello, John</div>
        </div>
        <div className='navbar-logout'>
          <div>Log out</div>
        </div>
      </div>
    );
  }
}
