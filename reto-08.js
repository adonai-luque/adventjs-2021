function maxProfit(prices) {
  let previousPrices = [];
  let max = 0;
  prices.forEach((p) => {
    previousPrices.forEach((pp) => {
      if (p - pp > max) max = p - pp;
    });
    previousPrices.push(p);
  });
  return max || -1;
}
