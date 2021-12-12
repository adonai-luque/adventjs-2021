function shouldBuyFidelity(times) {
  const withoutCard = 12 * times;
  let withCard = 286 - 36 * 0.75 ** times;
  return withCard < withoutCard;
}
