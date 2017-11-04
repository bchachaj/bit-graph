
export const fetchHistoricalData = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.coindesk.com/v1/bpi/historical/close.json',
    dataType:'json',
  });
};

export const fetchCurrentPrice= () => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
  }).then(r => r.json())
    .then(data => console.log(data));
};


// const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
//
//   fetch(url).then( r => r.json())
//     .then((bitcoinData) => {
//       console.log(bitcoinData);
//   });
