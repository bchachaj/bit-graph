import React from 'react';
import DynamicGraph from '../graph/dynamic_graph';
import * as GraphAPI from '../../util/bpi_format.js';
import { values } from 'lodash';


class DynamicView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const intervalQueryPriceAndSave = setInterval(
           (function(scope){
               return function(){
                   scope.props.requestCurrentPrice().then(data => scope.props.addCurrentPrice(data.price.bpi.USD.rate_float)).then(() => scope.props.requestAllPrices());
               };
            })(this),
           3000
       );


  }


  render(){
  let { prices } = this.props;
  // let formatted = GraphAPI.graphDataFormat(prices);
  const dataSet = values(this.props.priceData.updated_prices);
    return(
      <div>
        <h1>Last 5 Hours:</h1>
        <div className="rickshaw"></div>
        <p>Trending: Up</p>
        <div className="report"></div>
        <DynamicGraph graphData={dataSet}/>
      </div>
    );
  }
}

export default DynamicView;
