import React from 'react';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_PRICE, DYNAMIC_PRICES } from '../actions/price_actions';

const dynamicReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
  case RECEIVE_CURRENT_PRICE:
    const price = action.price;
    newState = merge({}, state, {['current_price']: price});
    return newState;
  case DYNAMIC_PRICES:
    const prices = action.prices;
    newState = merge({}, state, {['updated_prices']: prices});
    return newState;
  default:
  return state;
  }
};

export default dynamicReducer;
