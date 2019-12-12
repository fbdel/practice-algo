function sockMerchant(n, ar) {
  const sockObj = {};
  let dublicatesCount = 0;

  for (let sock of ar) {
    sockObj[sock] = sockObj[sock] + 1 || 1;
  }

  for (let type in sockObj) {
    let dublicates = sockObj[type] / 2;
    console.log("Obj " + type + " /2: " + dublicates);

    if (Math.floor(dublicates) >= 1) {
      dublicatesCount += Math.floor(dublicates);
    }

    console.log("dublicates Floored: " + Math.floor(dublicates) + "\n");
  }

  console.log(dublicatesCount);
  return dublicatesCount;
}

sockMerchant(9, [1, 1, 1, 3, 3, 2, 2, 4, 5, 5]);











