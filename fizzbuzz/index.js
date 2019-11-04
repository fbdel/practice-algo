// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i=0; i<n;i++){
        if (i%3){
            console.log("fizz")
        }else if (i%5){
            console.log("buzz")
        }else if (i%5 && i%3){
            console.log("fizzbuzz")
        }else{
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;

