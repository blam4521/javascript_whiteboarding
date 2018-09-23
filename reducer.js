arr1 = [1,2,3,4]
const reducer = (accum, currentValue) => accum + currentValue

// console.log(arr1.reduce(reducer, 1))

const object1 = {barry: 'lam', b: 2, c: 3}


let myfunc = (object1) => {
    let empty_array = [];
    for (prop in object1){
        empty_array.push(object1[prop])
    }
    return empty_array
}

// console.log( myfunc(object1) )

arr2 = [1,2,3,-2,-1]
arr3 = [36.13, 10.81, 28.23, 13.87, 7.64, 11.35, 50, 279.15, 25.99, 22.60, 4.51, 
    37.88, 90.40, 15.72, 23, 3.55, 1.12, 8, 3.34, 20, 4.61, 6, 7.91, 9.93, 132.7, 217.85]


const myfunc_pos = (arr2) => {
    let pos = []
    for(i=0;i<arr2.length;i++){
        if( arr2[i] > 0 ) {
            // console.log('positive fuck face')
            pos.push(arr2[i])
        } else {
            console.log('negative fuck face')
        }
    }
    return pos
}

const final_array = myfunc_pos(arr3)

// const reducer = (accum, number) => accum + number

console.log("The final total number is: ",final_array.reduce(reducer))