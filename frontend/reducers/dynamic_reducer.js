import React from 'react';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_PRICE } from '../actions/price_actions';

const dynamicReducer = (state = {}, action) => {
  switch(action.type){
  case RECEIVE_CURRENT_PRICE:
    debugger;
    return state;
  default:
  return state;
  }
};

export default dynamicReducer;
