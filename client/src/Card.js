import React, { Component } from 'react';
import drop from './graphics/drop.png';
import charge from './graphics/lightning.png';
export default class Card extends Component {
  state = {};

  render() {
    const { image } = this.props;
    return (
      <div className={`card ${image === drop ? 'water' : 'electricity'}`}>
        <div className='card-image'>
          <img src={image} alt='drop' />
        </div>
        <div className='card-info'>
          <div>Status:</div>
          <div>Charge:</div>
          <div>Tokens:</div>
        </div>
      </div>
    );
  }
}
