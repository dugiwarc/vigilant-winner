import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export default class Pie extends React.Component {
  render() {
    const data = [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 9000 },
      { quarter: 5, earnings: 13000 },
      { quarter: 6, earnings: 10000 },
      { quarter: 7, earnings: 12500 },
      { quarter: 8, earnings: 15000 },
      { quarter: 9, earnings: 13000 },
      { quarter: 10, earnings: 11000 },
      { quarter: 11, earnings: 7000 },
      { quarter: 12, earnings: 5000 }
    ];

    return (
      <div className='xy-chart'>
        <svg width={1200} height={200}>
          <VictoryBar
            width={1200}
            height={200}
            theme={VictoryTheme.material}
            offsetY={200}
            standalone={false}
            data={data}
            x='quarter'
            y='earnings'
          />
        </svg>
      </div>
    );
  }
}
