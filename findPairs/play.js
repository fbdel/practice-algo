function sockMerchant(n, ar) {
  const sockObj = {};
  let pairsCount = 0;

  for (let sock of ar) {
    sockObj[sock] = sockObj[sock] + 1 || 1;
  }

  for (let type in sockObj) {
    let pairs = sockObj[type] / 2;
    console.log("Obj " + type + " /2: " + pairs);

    if (Math.floor(pairs) >= 1) {
      pairsCount += Math.floor(pairs);
    }

    console.log("Pairs Floored: " + Math.floor(pairs) + "\n");
  }

  console.log(pairsCount);
  return pairsCount;
}

sockMerchant(9, [1, 1, 1, 3, 3, 2, 2, 4, 5, 5]);
