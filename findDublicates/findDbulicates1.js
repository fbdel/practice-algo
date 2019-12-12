
//Find and Return dublicates in an array
//Create an object and return values > 1

function findDublicates(arr) {
    const intObj = {}
    let dublicates = []

    for (let int of arr) {
        intObj[int] = intObj[int] + 1 || 1;
    }

    for (let key in intObj) {
        if (intObj[key] > 1) {
            dublicates.push(key)
        }
    }
    console.log(dublicates)
    return dublicates
}

//Sample Array
findDublicates([1, 1, 1, 3, 2, 2, 4, 5, 5, 9])


