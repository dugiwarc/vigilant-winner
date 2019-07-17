import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLabel, VictoryTooltip, VictoryPie } from 'victory';

class CustomLabel extends React.Component {
  render() {
    return (
      <g>
        <VictoryLabel {...this.props} />
        <VictoryTooltip
          {...this.props}
          x={200}
          y={250}
          text={`# ${this.props.text}`}
          orientation='top'
          pointerLength={0}
          cornerRadius={50}
          width={100}
          height={100}
          flyoutStyle={{ fill: 'black' }}
        />
      </g>
    );
  }
}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
CustomLabel.propTypes = { text: PropTypes.string };

export default class Chart extends React.Component {
  render() {
    return (
      <div className='pie-chart'>
        <svg viewBox='0 0 400 400'>
          <VictoryPie
            standalone={false}
            width={400}
            height={400}
            data={[{ x: 1, y: 120 }, { x: 2, y: 150 }]}
            innerRadius={68}
            labelRadius={100}
          />
        </svg>
      </div>
    );
  }
}
