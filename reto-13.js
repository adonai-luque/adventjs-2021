function wrapGifts(gifts) {
  let wrappedGifts = gifts.map(g => `*${g}*`);
  if (wrappedGifts.length) {
    const yWrapper = wrappedGifts[0].replace(/./g, '*');
    wrappedGifts = [yWrapper, ...wrappedGifts, yWrapper];
  } 
  return wrappedGifts;
}