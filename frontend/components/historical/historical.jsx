import React from 'react';
import * as CoinAPI from '../../util/coindesk_api';
import Graph from '../graph/graph';

class Historical extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // request hist data;
    this.props.requestPrices();
  }

  render() {
    // destructure and format data
    const { prices } = this.props;
    console.log(prices);
    return (
      <div className="row">
        <h1>Last 30 days</h1>
        <div className="graph">
          <Graph data={this.props.prices}/>
        </div>
      </div>
    );
  }
}

export default Historical;
