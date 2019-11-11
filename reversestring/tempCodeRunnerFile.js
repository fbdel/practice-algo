function reverse(str){
    let revStr=""
    for (letter of str){
        console.log(letter)
        revStr= letter + revStr
    }
    console.log(revStr);
    return revStr

}

reverse("asdf")