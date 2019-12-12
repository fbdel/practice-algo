function sockMerchant(n, ar) {
  const sockObj = {};
  let dublicatesCount = 0;

  for (let sock of ar) {
    sockObj[sock] = sockObj[sock] + 1 || 1;
  }

  for (let type in sockObj) {
    let dublicates = sockObj[type] / 2;
    console.log("Obj " + type + " /2: " + dublicates);

    if (Math.floor(dublicates) >= 1) {
      dublicatesCount += Math.floor(dublicates);
    }

    console.log("dublicates Floored: " + Math.floor(dublicates) + "\n");
  }

  console.log(dublicatesCount);
  return dublicatesCount;
}

sockMerchant(9, [1, 1, 1, 3, 3, 2, 2, 4, 5, 5]);


//Find and Return dublicates in an array
//Create an object and return values > 1

function findDublicates(arr) {
  const intObj = {}
  let dublicates = []
  
  for(let int of arr){
    intObj[int] = intObj[int] +1 || 1;
  }

  for(let key in intObj){
    if(intObj[key] > 1){
      dublicates.push(key)
    }
  }
  console.log(dublicates)
  return dublicates
}
findDublicates([1, 1, 1, 3, 2, 2, 4, 5, 5,9])










//Find and Return dublicates in an array
//Nested iterations 

function findDublicates(arr){
  const dublicates= []

  for(let i=0; i<arr.length; i++){
    for(let j = i+1; j<arr.length;j++){
      if (arr[i]===arr[j]){
        if (!dublicates.includes(arr[j])){
          dublicates.push(arr[i])
        }
      }
    }
  }
  console.log(dublicates)
  return dublicates
}
findDublicates([1, 1, 1, 3, 2, 2, 4, 5, 5])

