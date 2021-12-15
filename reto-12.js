function getMinJump(obstacles) {
  let jump = 1;
  while (obstacles.some((o) => o % jump === 0)) jump++;
  return jump;
}

const obstacles = [1, 2, 3];
console.log(getMinJump(obstacles));
