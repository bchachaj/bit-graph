import React from 'react';
import { connect } from 'react-redux';
import DynamicView from './dynamic_view';


const mapStateToProps = state => {
  return {
    stuff: 'Stuff',
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicView);
