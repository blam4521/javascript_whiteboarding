animals = 
[ {
    'name':'dog',
    'size':'small'
},
{
    'name':'lion',
    'size':'medium'
},
{
    'name':'elephant',
    'size':'big'
} ]

const whatever = animals.map(animal => {
    console.log(`${animal.name}`)
})

const theNumbers = [4,8,15,16,23,42]

const things = theNumbers.map((value, index)=> {
    return {
        value,
        index
    }
});

console.log(things)


const multipliedByNext = starter.map(( number, index, array ) => {
    let nextIndex = index + 1
    if(index == array.length -1){
        nextIndex = 0
    }
    return number * array[nextIndex];
})

