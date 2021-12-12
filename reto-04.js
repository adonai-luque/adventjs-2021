function createXmasTree(height) {
  const body = (h) =>
    [...Array(h)]
      .map((_, i) => "_".repeat(h - i - 1) + "*".repeat(2 * i + 1) + "_".repeat(h - i - 1))
      .join("\n");
  const base = (h) =>
    "_".repeat(h - 1) + "#" + "_".repeat(h - 1) + "\n" + "_".repeat(h - 1) + "#" + "_".repeat(h - 1);
  return body(height) + "\n" + base(height);
}
