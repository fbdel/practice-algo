// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Shorter ES6 version
function reverse(str){
    let revStr=""
    for (letter of str){
        // console.log(letter)
        revStr= letter + revStr
    }
    // console.log(revStr);
    return revStr

}

// reverse("asdf")
   
module.exports = reverse;



//Best Solution 

//    let revString = "";

//    for (let character of str) {
//      revString = character + revString;
//      debugger;
//    }
//    return revString;




// function reverse(str) {
//     return str.split('').reverse().join('')
// }


// function reverse(str) {
//     let revString = "";
//     let lastIndex = str.length - 1
//     for (var i = lastIndex; i > -1; i--) {
//         revString += str[i];
//     }
//     return revString
// }


// function reverse(str) {
//     let revString = "";

//     for (var i = str.length - 1; i > -1; i--) {
//         revString += str[i];
//     }
//     return revString
// }


// function reverse(str) {
//     let revString = "";

//     for (let character of str) {
//         revString = character + revString
//     }
//     return revString
// }


//Non-ES6 version
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed
//     }, "")
// }



//Shorter ES6 version
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => character + reversed, "")
//     debugger;
// }