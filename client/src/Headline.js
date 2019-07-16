import React, { Component } from 'react';

export default class Headline extends Component {
  render() {
    return (
      <div className='equation'>
        <div className='present'>Present</div>
        <div className='previous'>Previous</div>
        <div className='multiplier'>Multiplier</div>
        <div className='usage'>Usage</div>
        <div className='present-value'>95477</div>
        <div className='minus'>-</div>
        <div className='previous-value'>95279</div>
        <div className='times'>x</div>
        <div className='mutiplier-value'>1</div>
        <div className='equals'>=</div>
        <div className='usage-value'>198kWh</div>
      </div>
    );
  }
}
