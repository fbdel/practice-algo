// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //Find the sign of the number (- or +)
    let signN = Math.sign(n)

    return parseInt(n.toString().split("").reverse().join("")) * signN
}
module.exports = reverseInt;
