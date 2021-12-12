function daysToXmas(date) {
  let xmas = new Date("Dec 25, 2021");
  return Math.ceil((xmas - date) / 86400000);
}
