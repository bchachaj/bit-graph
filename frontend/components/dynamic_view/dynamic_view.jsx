import React from 'react';
import DynamicGraph from '../graph/dynamic_graph';
import * as GraphAPI from '../../util/bpi_format.js';
import { values } from 'lodash';


class DynamicView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPrices();
    const intervalQueryPriceAndSave = setInterval(
           (function(scope){
               return function(){
                   scope.props.requestCurrentPrice().then(data => scope.props.addCurrentPrice(data.price.bpi.USD.rate_float)).then(() => scope.props.requestAllPrices());
               };
            })(this),
           3600000
       );


  }


  render(){
  const { prices } = this.props;
  let dataSet = values(this.props.priceData);
  dataSet = dataSet.filter((d) => d.coin_price);
  dataSet.map((d) => {
    d.date = (new Date(d.created_at).toString());
  });

  const tableRows = dataSet.reverse().map((item, idx) =>
    <li className="table_row" key={Math.random() * 100 + idx}>
      <span><p>{item.date}</p></span>
      <span><p>${item.coin_price}</p></span>
    </li>
  );

    return(
      <div>
        <DynamicGraph graphData={dataSet}/>
        <div className="data-report">
          <ul className="t-header">
            <li className="table_row">
              <span>Record</span>
              <span>Price Per Unit (USD)</span>
            </li>
          </ul>
          <ul className="table">
            { tableRows }
          </ul>
        </div>
      </div>
    );
  }
}

export default DynamicView;
