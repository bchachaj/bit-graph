import React from 'react';
import { combineReducers } from 'redux';
import priceReducer from './price_reducer';
import dynamicReducer from './dynamic_reducer';

const rootReducer = combineReducers({
  hist_prices: priceReducer,
  dynamic_price: dynamicReducer,
});


export default rootReducer;
