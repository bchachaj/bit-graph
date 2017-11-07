import React from 'react';
import * as CoinAPI from '../../util/coindesk_api';
import Graph from '../graph/graph';
import * as GraphAPI from '../../util/bpi_format.js';


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
    const {prices} = this.props;
    let formatted = GraphAPI.graphDataFormat(prices);
    return (
      <div className="row">
          <Graph graphData={formatted}/>
      </div>
    );
  }
}

export default Historical;
