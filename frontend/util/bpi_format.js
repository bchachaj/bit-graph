import moment from 'moment';

export const graphDataFormat = (prices) => {
  const formattedPrices = [];
  let day = 0;
  for (let item in prices) {
    formattedPrices.push({
      d: moment(item).format('MMM DD'),
      p: prices[item].toLocaleString('us-EN', {
        style: 'currency',
        currency: 'USD'
      }),
      x: day,
      y: prices[item]
    });
    day++;
  }
  return formattedPrices;
};
