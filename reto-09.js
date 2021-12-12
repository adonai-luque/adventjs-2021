function groupBy(collection, it) {
  let grouped = {};
  collection.forEach((el) => {
    let applied = typeof it === "function" ? it(el) : el[it];
    if (grouped[applied]) {
      grouped[applied].push(el);
    } else {
      grouped[applied] = [el];
    }
  });
  return grouped;
}
