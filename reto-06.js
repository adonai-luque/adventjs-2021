function sumPairs(numbers, result) {
  let pair;
  let i = numbers.length;
  let numbersMap = {};
  while (i-- > 0) {
    if (numbersMap[numbers[i]]) pair = [numbers[i], result - numbers[i]];
    numbersMap[result - numbers[i]] = 1;
  };
  return pair || null;
}
