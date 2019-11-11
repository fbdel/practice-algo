// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
}

module.exports = vowels;



//Irrative Version #1

// function vowels(str) {
//   let count = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   let strL = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     // console.log(strL[i])
//     // console.log("Index "+i)
//     if (vowels.includes(strL[i])) {
//       count++;
//       // console.log("if statment")
//     }
//   }
//   console.log("Final Count" + count);
//   return count;
// }

//*********************** 

//Irrative Version #2

// let vowelCounter = 0;
// let vowelChecker = ["a", "e", "i", "o", "u"];

// for (let letter of str.toLowerCase()) {
//     if (vowelChecker.includes(letter)) {
//         vowelCounter++

//     }
// }
// return vowelCounter 

//*********************** 

//Irrative Version #3

// vowelCount = 0;
// for (let letter of str.toLowerCase()) {
//     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//         vowelCount += 1
//     }
// }
// return vowelCount