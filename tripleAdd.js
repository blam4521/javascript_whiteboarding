function tripleAdd(x) {
    console.log('this is x', x)
    return function(y) {
        console.log('this is y', y)
        return function(z) {
            console.log('this is z', z)
            return x+y+z
        }
    }
}


console.log( tripleAdd(10)(20)(30) )

