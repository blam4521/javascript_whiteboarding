// recursion
function printNumber(n, dec=1) {
    // set the base case otherwise it will gone on forever
    
    if (n === 0) {
        return;
    }
    console.log(n);
    printNumber(n -dec );
}

printNumber(10);