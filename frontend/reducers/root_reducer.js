import React from 'react';
import { combineReducers } from 'redux';
import priceReducer from './price_reducer';

const rootReducer = combineReducers({
  hist_prices: priceReducer
});


export default rootReducer;
