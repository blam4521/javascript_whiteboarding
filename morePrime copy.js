function isPrime(num) {
    
    if(Math.sqrt(num) % Math.sqrt(num) === 0) {
        console.log('this is a prime')
    } else {

    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;          
        }
    }
    return true;
}
// console.log(isPrime(9));

function addKeyAndValue(arr, key, value) {
    arr.forEach(element => {
        element.key = value         
    });
    console.log(arr)
}

addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')