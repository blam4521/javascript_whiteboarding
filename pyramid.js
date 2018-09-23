function pyramid(n) {
    const midpoint = Math.floor((2*n-1) /2 );
    // this iterates for rows
    for(row=0; row<n; row++){
        let level = ''
        // this iterates through cols
        for(col=0; col<2*n-1; col++){
            // console.log(col)
            if(midpoint - row <= col && midpoint + row >= col) {
                level += '#';
            }  else {
                level += '_'
            }
        }
        console.log(level)
    }

}

pyramid(10)

module.exports = pyramid;