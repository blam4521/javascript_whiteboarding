// for each doesn't return array you have 
// explicitly declare and return it
function doubleValues(arr){
    let newArr = []
    arr.forEach(function(value) {
       newArr.push(value * 2 )
    })
    return newArr 
    
}


function onlyEvenValues(arr) {
    let evenList = []
    arr.forEach(value => {
        if(value % 2 === 0){
            evenList.push(value)
        }
    })
    return evenList
}

// console.log( onlyEvenValues([2,3,4]) )

function showFirstAndLast(arr) {
    let evenList = []
    arr.forEach( value => {
        let wordList = value.split("")
        evenList.push(wordList[0] + wordList[wordList.length-1])
    })
    return evenList
}
// console.log( showFirstAndLast(['colt','matt', 'tim', 'udemy']) )


function doubleValues(arr){
    return arr.map( value => {
        return value * 2
    })
}

// console.log(doubleValues([1,2,3]))

function valTimesIndex(arr){
    return arr.map( (value, index) => {
        return value*index
    })
}

// console.log(valTimesIndex([1,2,3]))

function extractKey( arr, key  ){
    return arr.map(( value, index ) => {
        // console.log(value)
        return value[key]
    })
}

// console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'))

function filterByValue(arr, key){
    return arr.filter( value => {
        // console.log(value)
        if(value[key]) {
            return value
        }
    })
}

// console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'))

function find(arr, searchValue){
    return arr.filter( value => {
        if( value === searchValue) {
            // console.log(value)
            return value
        } 
    })[0]
}

// console.log(find([1,2,3,4,5], 69))

function findInObj(arr, key, searchValue){
    return arr.filter( value => {
        // console.log(value[key])
        if(value[key] === searchValue)
            return value
    })[0]
}

// console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true))

function extractValue(arr, key){
    let currentValue = arr[0].key
    let newArray = []
    arr.reduce( (acc, currentValue) => {
        console.log(currentValue[key])
        newArray.push( currentValue[key] )
    }, currentValue)
    return newArray
}
// let array = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// console.log(extractValue(array, 'name'))


function vowelCount(str){
    let vowelObj = {}
    let lowCase = str.toLowerCase()
    let arrLowCase = lowCase.split("")
    let vowels = ["a", "e", "i", "o", "u", "y"]
    
    arrLowCase.reduce( (acc, currVal) => {
        if(vowels.indexOf(currVal) !== -1) {
            if(currVal in vowelObj) {
                vowelObj[currVal] += 1
            } else {
                vowelObj[currVal] = 1
            }
        } 
    }, lowCase[0])
    return vowelObj
}

console.log(vowelCount("FUCK YOU"))