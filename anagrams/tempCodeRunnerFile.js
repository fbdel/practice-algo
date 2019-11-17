function anagrams(stringA, stringB) {
    const newStringA = stringA.replace(/[\W]/g, "").toLowerCase()
    const newStringB = stringB.replace(/[\W]/g, "").toLowerCase()

    const aMap = {};
    const bMap = {};

    for (let char of newStringA){
        aMap[char] = aMap[char] + 1 || 1;
        console.log (char)
        console.log("aMap[Char] iteration: " + aMap[char])

    }
    console.log("-----------")
    console.log("-----------")

    for (let char of newStringB) {
        bMap[char] = bMap[char] + 1 || 1
        console.log(char)
        console.log("bMap[Char] iteration: " + bMap[char])


    }
    console.log (diff(aMap, bMap))

    // if (aMap === bMap){
    //     console.log ("true")
    //     return true
    // }else {
    //     console.log("false")
    //     return false
    // }

}
    
anagrams("why Me Boo!", "OObe mYhw")