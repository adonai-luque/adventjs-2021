function decodeNumber(symbols) {
  const VALUE = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  };
  return [...symbols].reduce((acum, s, i) => {
    acum += VALUE[s] < VALUE[symbols[i+1]] ? -VALUE[s] : VALUE[s];
    return acum;
  }, 0);
}