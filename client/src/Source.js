import React, { Component } from 'react';
import gas from './graphics/gas.png';
import drop from './graphics/drop.png';
import electricity from './graphics/lightning.png';

export default class Source extends Component {
  state = { isLoading: false };
  render() {
    const { type } = this.props;
    const { isLoading } = this.state;
    return (
      <div className='panel-add'>
        {!isLoading ? (
          <img
            onClick={() => {
              this.setState({ isLoading: true });
            }}
            src={
              type === 'gas'
                ? gas
                : type === 'water'
                ? drop
                : type === 'electricity'
                ? electricity
                : electricity
            }
            alt=''
          />
        ) : (
          <div class='loader'>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        )}
      </div>
    );
  }
}
