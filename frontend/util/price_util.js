export const recordCurrentPrice = (price) => {
  return $.ajax({
    method: 'POST',
    url:`/api/coin_prices`,
    data: { coin: price }
  });
};

export const fetchPriceData = () => {
  return $.ajax({
    method: 'GET',
    url:'/api/coin_prices',
  });
};
