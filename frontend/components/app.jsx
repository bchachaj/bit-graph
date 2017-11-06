import React from 'react';
import Historical from './static_view/hist_container';
import DynamicView from './dynamic_view/dynamic_container';


const App = () => {
  return (
    <div>
    <h2>Dashboard</h2>
    <DynamicView/>
    <Historical/>
    </div>
  );

};


export default App;
