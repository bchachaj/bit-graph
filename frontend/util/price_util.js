export const recordCurrentPrice = (price) => {
  return $.ajax({
    method: 'POST',
    url:'tdb',
  });
};

export const fetchPriceData = () => {
  return $.ajax({
    method: 'GET',
    url:'Allrecords',
  });
};
