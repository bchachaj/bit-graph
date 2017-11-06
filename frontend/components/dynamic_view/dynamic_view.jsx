import React from 'react';

class DynamicView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Last 5 Hours:</h1>
        <div className="rickshaw"></div>
        <p>Trending: Up</p>
        <div className="report"></div>
      </div>
    );
  }
}

export default DynamicView;
