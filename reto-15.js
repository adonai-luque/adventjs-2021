function checkSledJump(heights) {
  let slopes = [1];
  let slope;
  heights.slice(0, -1).forEach((h, i) => {
    slope = Math.sign(heights[i + 1] - heights[i]);
    if (slope !== slopes.slice(-1)[0]) slopes.push(slope);
  });
  return slopes.length === 2 && slopes[0] + slopes[1] === 0;
}