// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// module.exports = maxChar;



function maxChar(str) {
  let charObj = {};
  let maxChar = "";
  let max = 0;

  for (let char of str) {
    if (charObj[char]) {
      charObj[char] = charObj[char] + 1;
    } else {
      charObj[char] = 1;
    }
    // console.log("Char "+char+": "+charObj[char] )
  }

  for (let item in charObj) {
    if (charObj[item] > max) {
      max = charObj[item];
      maxChar = item;
      // console.log("Max: "+max+" MaxChar"+maxChar)
    }
  }
  console.log(maxChar);
  console.log(charObj);
  return maxChar;
}

module.exports = maxChar;
