function isPrime(num){
    // start at 2 because 0 you can't mod over since it would be undefined
    // and 1 is going to always be the same number as your input
    // 4 % 1 === 0 is always going have a remainder of zero
    for(let i=2; i < num; i++){
        // Lets take num = 4 as a input
        // So 4 % 2 === 0, so with this since it is true
        // automatically return false
        if(num % i === 0) {
            console.log('inside if')
            return false
        }
    }
    return true 
}
console.log(isPrime(4))
