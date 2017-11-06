import React from 'react';
import { connect } from 'react-redux';
import DynamicView from './dynamic_view';
import { requestCurrentPrice, addCurrentPrice, requestAllPrices } from '../../actions/price_actions';
import { selectPrices } from '../../reducers/selectors';


const mapStateToProps = state => {
  return {
   priceData: state.dynamic_prices
 };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCurrentPrice: () => dispatch(requestCurrentPrice()),
    addCurrentPrice: (price) => dispatch(addCurrentPrice(price)),
    requestAllPrices: () => dispatch(requestAllPrices())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicView);
