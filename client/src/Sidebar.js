import React, { Component } from 'react';
import MenuBox from './MenuBox';
import StatusBox from './StatusBox';
export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <StatusBox />
        <MenuBox makeTransaction={this.props.makeTransaction} />
      </div>
    );
  }
}
