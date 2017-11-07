import React from 'react';
import Historical from './static_view/hist_container';
import DynamicView from './dynamic_view/dynamic_container';


const App = () => {
  return (
    <div>
    <div className="nav-bar">
      <h2>Bitcoin Liquidity Index</h2>
      <h4>Rendered with React + D3. Data provided by <a href="https://www.coindesk.com/api/">CoinDesk</a></h4>
    </div>
    <DynamicView/>
    <Historical/>
    </div>
  );

};


export default App;
