import * as PriceAPI from '../util/price_util';
import * as CoinAPI from '../util/coindesk_api';

export const RECEIVE_ALL_PRICES = 'RECEIVE_ALL_PRICES';
export const RECEIVE_CURRENT_PRICE = 'RECEIVE_CURRENT_PRICE';


//Get index of daily recorded prices from db

export const requestAllPrices = () => dispatch => {
  return PriceAPI.fetchPriceData()
    .then(prices => dispatch(receiveAllPrices(prices))
  );
};

export const requestHistory = () => dispatch => {
  return CoinAPI.fetchHistoricalData()
  .then(prices => dispatch(receiveAllPrices(prices))
);
};

export const receiveAllPrices = (prices) => ({
  type: RECEIVE_ALL_PRICES,
  prices
});

export const addCurrentPrice = (price) => dispatch => {
  // post price then retrieve all prices?
  return PriceAPI.recordCurrentPrice(price)
    .then(prc => dispatch(receiveCurrentPrice(prc))
  );
};

export const receiveCurrentPrice = (price) => ({
  type: RECEIVE_CURRENT_PRICE,
  price
});
