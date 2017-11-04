import React from 'react';
import { combineReducers } from 'redux';
import priceReducer from './price_reducer';

const rootReducer = combineReducers({
  priceReducer
});


export default rootReducer;
