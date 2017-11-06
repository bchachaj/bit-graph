import React from 'react';
import DynamicGraph from '../graph/dynamic_graph';
import * as GraphAPI from '../../util/bpi_format.js';

class DynamicView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    setInterval(this.props.requestCurrentPrice.bind(this), 5000);
  }

  render(){
  let { prices } = this.props;
  let formatted = GraphAPI.graphDataFormat(prices);

    return(
      <div>
        <h1>Last 5 Hours:</h1>
        <div className="rickshaw"></div>
        <p>Trending: Up</p>
        <div className="report"></div>
        <DynamicGraph graphData={formatted}/>
      </div>
    );
  }
}

export default DynamicView;
