import * as PriceAPI from '../util/price_util';
import * as CoinAPI from '../util/coindesk_api';

export const RECEIVE_ALL_PRICES = 'RECEIVE_ALL_PRICES';
export const RECEIVE_CURRENT_PRICE = 'RECEIVE_CURRENT_PRICE';
export const DYNAMIC_PRICES = 'DYNAMIC_PRICES';


export const requestCurrentPrice = () => dispatch => {
  return CoinAPI.fetchCurrentPrice()
    .then(res => dispatch(receiveCurrentPrice(res))
  );
};


export const requestHistory = () => dispatch => {
  return CoinAPI.fetchHistoricalData()
  .then(prices => dispatch(receiveAllPrices(prices))
);
};

export const receiveCurrentPrice = (price) => ({
  type: RECEIVE_CURRENT_PRICE,
  price
});


//Get index of last n prices from db
export const requestAllPrices = () => dispatch => {
  return PriceAPI.fetchPriceData()
    .then(prices => dispatch(receiveDynamicPrices(prices))
  );
};

export const receiveDynamicPrices = (prices) => ({
  type: DYNAMIC_PRICES,
  prices
});


export const receiveAllPrices = (prices) => ({
  type: RECEIVE_ALL_PRICES,
  prices
});

export const addCurrentPrice = (price) => dispatch => {
  return PriceAPI.recordCurrentPrice(price)
    .then(prc => dispatch(receiveCurrentPrice(prc))
  );
};
