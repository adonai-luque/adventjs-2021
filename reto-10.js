function getCoins(change) {
  const values = [1, 2, 5, 10, 20, 50];
  const result = [0, 0, 0, 0, 0, 0];
  for (let i = 5; i >= 0 && change > 0; i--) {
    while (change >= values[i]) {
      change -= values[i];
      result[i]++;
    }
  }
  return result;
}
