// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const revStr = str.split("").reverse().join("")
    
    // Boolean statement - if statement is true it will return true otherwise false 
    return str === revStr;
}

module.exports = palindrome;




//Shortest Solution
//
// function palindrome(str) {
//     const revStr = str.split("").reverse().join("")
//     
        //Boolean statement - if statement is true it will return true otherwise false 
//     return str === revStr;
// }




// function palindrome(str) {
//     const revStr = str.split("").reverse().join("")
//     if (revStr === str) {
//         return true
//     } else {
//         return false
//     }
// }




//Not Ideal - extra characters being checked
// function palindrome(str) {

//     return str.split("").every((char, i) => {
//         let lastI = str.length - 1
//         return char === str[lastI - i]
//     });

// }
