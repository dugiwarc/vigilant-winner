import React, { Component } from 'react';
import Details from './Details';
import battery from './graphics/battery.png';

export default class FullStats extends Component {
  render() {
    const { title, buyer, price, currency } = this.props;
    return (
      <div
        className={`full-stats ${
          title === 'Delivery'
            ? 'right'
            : title === 'Supply'
            ? 'left'
            : title === 'Storage'
            ? 'bottom-right'
            : 'bottom-left'
        }`}
      >
        <div className='fs-buyer'>{buyer}</div>
        <div
          className={`fs-title ${title === 'Delivery' ? 'delivery' : 'supply'}`}
        >
          {title}
        </div>
        {title !== 'Storage' && (
          <div>
            <div className='fs-price'>
              <div className='currency'>{currency}</div>
              <div className='value'>{price}</div>
            </div>
            <Details title='Customer Charge' info='7.21' />
            <Details title='Standard Meter Charge' info='2.86' />
            <Details
              title='Distribution Facilities Charge'
              rate='198 kWh x 0.00126'
              info='4.84'
            />
            <Details
              title='Electricity Distribution Charge'
              rate='198 kWh x 0.00126'
              info='.25'
            />
          </div>
        )}
        {title === 'Storage' && (
          <div className='storage'>
            <div>Connected sources:</div>
            <div className='bold'>8 / 10</div>
            <div className='storage-info'>
              <img src={battery} alt='battery' />
              <div className='battery-info'>99.5%</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
