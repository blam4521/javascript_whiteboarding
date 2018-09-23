arr = [ 1, 1, 2, 5]

function removeDups(arr) {
    let blah = {}
    let noDup = []
    for(let i=0; i<arr.length; i++){
        if( !(arr[i] in blah) ) {
            blah[arr[i]] = 1
            console.log("inside", arr[i])
            noDup.push(arr[i])
        } else {
            console.log('there is a duplicate', arr[i])
        }
    }
    return noDup
}

// console.log( removeDups(arr) )

function removeDuplicates(arr) {
    let uniq_array = []
    for(let i = 0; i < arr.length; i++) {
        if(uniq_array.indexOf(arr[i]) === -1) {
            console.log(arr[i])
            uniq_array.push(arr[i])
        } else {
            console.log('this is a duplicate')
        }
    }
    return uniq_array
}

console.log( removeDuplicates(arr) )

