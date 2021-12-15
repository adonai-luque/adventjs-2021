function missingReindeer(ids) {
  let n = ids.length;
  let sum = ids.reduce((s, a) => s + a);
  return (n * (n + 1)) / 2 - sum;
}
