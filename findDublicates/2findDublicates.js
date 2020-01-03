//Find and Return dublicates in an array
//Nested iterations 

function findDublicates(arr) {
    const dublicates = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (!dublicates.includes(arr[j])) {
                    dublicates.push(arr[i])
                }
            }
        }
    }
    console.log(dublicates)
    return dublicates
}

findDublicates([1, 1, 1, 3, 2, 2, 4, 5, 5])



