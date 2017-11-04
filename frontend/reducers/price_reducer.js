import React from 'react';
import { merge } from 'lodash';
import { RECEIVE_ALL_PRICES, RECEIVE_CURRENT_PRICE } from '../actions/price_actions';

const priceReducer = (state = {}, action) => {
  switch(action.type){
  case RECEIVE_ALL_PRICES:
    return action.prices.bpi;
  default:
  return state;
  }
};

export default priceReducer;
