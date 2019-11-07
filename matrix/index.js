// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10,  9,  8, 7]]

function matrix(n) {
  let startRow = 0;
  let startCol = 0;
  let endRow = n - 1;
  let endCol = n - 1;

  let count = 1;

  const arr = [];

  for (let subArr = 0; subArr < n; subArr++) {
    arr.push([]);
  }

  while (startRow <= endRow && startCol <= endCol) {
    //Top Row
    for (let c = startCol; c <= endCol; c++) {
      arr[startRow][c] = count;
      count++;
    }
    startRow++;

    //End Column
    for (let r = startRow; r <= endCol; r++) {
      arr[r][endCol] = count;
      count++;
    }
    endCol--;

    //Bottom Row
    for (let c = endCol; c >= startCol; c--) {
      arr[endRow][c] = count;
      count++;
      console.log(count);
      console.log(arr);
    }
    endRow--;

    //Begining Column
    for (let r = endRow; r >= startRow; r--) {
      arr[r][startCol] = count;
      count++;
    }
    startCol++;
  }
  console.log(arr);
  return arr;
}

matrix(4);
module.exports = matrix;
