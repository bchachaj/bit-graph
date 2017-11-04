
export const fetchHistoricalData = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.coindesk.com/v1/bpi/historical/close.json'
  });
};

export const fetchCurrentPrice= () => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
  });
};
