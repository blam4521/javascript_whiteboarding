function revInt(n) {
    const numString = n.toString()
    const numArray = numString.split('')
    const revNumString = numArray.reverse()
    console.log('revNumString: ',revNumString)
    const joinArray = revNumString.join('')
    console.log('this is joinArray', typeof(joinArray))
    return(Number(joinArray))
}

console.log( revInt(123) )