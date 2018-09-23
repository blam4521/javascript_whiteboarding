function palindrome(str) {
    // Split on quotes inside 
    let strArray = str.split('')
    // console.log(strArray)
    let revStrArray = strArray.reverse().join('')
    // console.log(revStrArray)
    if (str === revStrArray) {
        console.log('str:', str, 'revStrArray:',revStrArray)
        return true
    } else {
        console.log('str:', str, 'revStrArray:',revStrArray)
        return false
    }


}

console.log( palindrome('tacocat') );