// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//2 Solutions : With and without spaces 
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}

module.exports = steps;



//Solution WITHOUT Spaces

// function steps(n, dec = 1, hashN = 1) {
//   // console.log("HashN: "+hashN)
//   // console.log("Number: "+n)
//   if (n === 0) {
//     console.log("End N");
//     return;
//   }
//   if (hashN === n) {
//     console.log("end");
//     return;
//   }
//   // let revD = n-1

//   let hash = "#";
//   console.log(hash.repeat(hashN));
//   // console.log("Hash# = "+ hashN)

//   steps(n - dec, (dec = 1), hashN + dec);
// }

// steps(4);
module.exports = steps;
