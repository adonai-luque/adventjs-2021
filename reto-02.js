function listGifts(letter) {
  const giftArray = letter.trim().split(/ +/);
  const giftCount = {};
  giftArray.forEach((g) => {
    if (g.indexOf("_") !== 0) {
      let count = giftCount[g];
      giftCount[g] = count ? count + 1 : 1;
    }
  });
  return giftCount;
}
