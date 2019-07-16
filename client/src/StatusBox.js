import React, { Component } from 'react';
import StatusBoxText from './StatusBoxText';
import household from './graphics/house.png';

export default class StatusBox extends Component {
  render() {
    return (
      <div className='status-box'>
        <div className='status-box-image'>
          <img src={household} alt='house' />
        </div>
        <div className='status-box-address'>
          0x
          <br />
          6d4D76b888E6eB9E596a41F73072EEd0d3102429
        </div>
        <StatusBoxText />
      </div>
    );
  }
}
