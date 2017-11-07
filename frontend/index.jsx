import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { requestAllPrices } from './actions/price_actions';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  let store;
  store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);

});
