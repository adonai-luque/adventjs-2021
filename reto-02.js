function listGifts(letter) {
  const giftArray = letter.match(/\b(?!_)[a-záéíóúü]+\b/g)
  const giftCount = {}
  giftArray.forEach((g) => { giftCount[g] = (giftCount[g] || 0) + 1 });
  return giftCount;
}