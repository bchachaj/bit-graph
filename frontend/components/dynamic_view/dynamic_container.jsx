import React from 'react';
import { connect } from 'react-redux';
import DynamicView from './dynamic_view';
import { requestCurrentPrice } from '../../actions/price_actions';

const mapStateToProps = state => {
  return {
   prices: state.hist_prices,
 };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCurrentPrice: () => dispatch(requestCurrentPrice())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicView);
