// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
        chunked.push([element]);
        } else {
        last.push(element);
        }
    }

    return chunked;
}



module.exports = chunk;


//Using slice() Helper
   
// const chunked = [];
// let i = 0;

// while (i < array.length) {
//     chunked.push(array.slice(i, i + size))
//     i += size;
// }
// return chunked


//const chunked = [];
//
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//
//   return chunked;





//???? Doesn't Work Yet

// console.log("Starting NOW /n")
// let chunked = [];
// let subArr = [];

// var currCount = 1;
// for (let element of array) {
//     if (currCount < size) {
//         subArr.push(element)
//         // console.log("subArr after 1st push " + subArr)

//         // debugger;
//         // console.log("subArr in 1st - "+subArr)
//         currCount++
//         // console.log("currCount in 1st - "+currCount)

//         // debugger;
//     } else if (currCount === size) {
//         subArr.push(element)
//         // console.log("subArr in final push - " + subArr)
//         chunked.push(subArr);
//         // console.log("chunked  " + chunked)
//         currCount = 1
//         // console.log("subArr in 2st - " + currCount)

//         subArr = [];
//     }
//     // debugger;
// }
// // console.log("Chunk Final " + chunked)

// return chunked