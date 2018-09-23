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

// addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

function vowelCount(str) {
    let lower = str.toLowerCase().split("")
    // console.log(lower)    
    let vowels = [ 'a', 'e', 'i', 'o', 'u']
    let output = {}
    vowels.forEach(element => {
        lower.forEach(letter => {
            if(element == letter){
                // console.log(element)
                if(!(element in output)){
                    output[element] = 1 
                } else {
                    output[element] += 1
                }
            }
        })
    })
    return output 
}

// vowelCount('Elie')
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') 

function extractFullName(arr) {
    let name = []
    arr.map( (value, index) => {
        console.log(value["first"] + " " + value["last"])
        let fullName = value["first"] + " " + value["last"]
        name.push(fullName)
    })
    return name
}

// console.log( extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) )

function removeVowels(str){
    let vowels = [ 'a', 'e', 'i', 'o', 'u']
    let strFlat = str.toLowerCase().split("")
    let newStr = []
    strFlat.filter( value => {
        if(vowels.indexOf(value) === -1) {
            // console.log(value)
            newStr.push(value)
        }
    })
    console.log(newStr.join(''))
    return typeof(newStr.join('')) 
}

// console.log( removeVowels('Elie') ) // ('l')
// console.log( removeVowels('TIM') ) // ('tm')
// console.log( removeVowels('ZZZZZZ') ) // ('zzzzzz')

function doubleOddNumbers(arr){
    let newValue = []
    let oddNums = []
    return arr.filter( (number, index) => {
        return index % 2 !== 0;
    })
    .map((value) => {
        return value * 2
    })
    // return newValue
}

// console.log(doubleOddNumbers([1,2,3,4,5]))
var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
function addKeyAndValue(arr, key, value){
    return arr.reduce( (acc, next, idx) => {
        acc[idx][key] = value
        return acc
    }, arr)
}

// console.log( addKeyAndValue(arr, 'title', 'Instructor') )

function partition(arr, callback) {
    
    return arr.reduce( (acc, curr ) => {
        if ( callback(curr) ) {
            acc[0].push(curr)
        } else {
            acc[1].push(curr)
        } 
        return acc
    }, [[], []])
}

function isEven(val){
    return val % 2 === 0
}
var arr = [1,2,3,4,5,6,7,8]

// console.log( partition(arr, isEven) )

// const uglyArray = [[1,2,[3,[5]]],4]

// function singleArr(arr){
//     return uglyArray.reduce(( acc, curr, index) => {
//         // this handles when its not a array
//         if(Array.isArray(curr)) {
//             console.log(curr, index)
//             // console.log(curr[curr.length-1])
//             acc.push(curr)
        
//         // this handles when its a array within a array
//         } else {
//             if(Array.isArray(curr[curr.length-1])){
//                 acc.push(...curr[curr.length-1]) 
//             }
//         }
//         return acc
//     }, [])
// }

function singleArr(arr){
    return arr.reduce(( acc, curr, index) => {
        
        if(Array.isArray(curr)) {
            for(let i=0; i < curr.length; i++){
                if(Array.isArray(curr[i])){
                    let flattend  = curr[i].reduce(( accum, currentValue) =>  
                    accum.concat(currentValue),[])
                    // console.log(flattend)
                    acc.push(...flattend)
                } else {
                    acc.push(curr[i])
                }
            }
        } else {
            // console.log(curr)
            acc.push(curr)
        }
        
        return acc
    }, [])
}

const fats = [[0, 1], [2, 3], [4, 5]]
console.log(singleArr(fats))
