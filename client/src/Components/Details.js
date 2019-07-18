import React, { Component } from 'react';

export default class Details extends Component {
  render() {
    const { title, info, rate } = this.props;
    return (
      <div className='fs-details'>
        <div>{title}</div>
        {rate && <div className='fs-red'>{rate}</div>}
        <div className='fs-subdetails'>{info}</div>
      </div>
    );
  }
}
