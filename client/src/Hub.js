import React, { Component } from 'react';
import household from './graphics/house.png';

export default class Hub extends Component {
  render() {
    return (
      <div className='hub'>
        <div className='hub-image'>
          <img src={household} alt='house' />
        </div>
        <div className='hub-info'>
          <div className='hub-info-item'>
            <div className='property'>Hub ID:</div>
            <div className='property-info'>#523623625</div>
          </div>
          <div className='hub-info-item'>
            <div className='property'>Code: </div>
            <div className='property-info'>DarkHawk</div>
          </div>
          <div className='hub-info-item'>
            <div className='property'>Connection:</div>
            <div className='property-info'>Strong</div>
          </div>
        </div>
        <div className='hub-connection' />
      </div>
    );
  }
}
