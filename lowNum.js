// let a = [1,4,1,2,3,6]
let a = [-1, -2];
// console.log(a)
//  low number function.

function lowInt(a) {
  let sortA = a.sort();
  let min = 1;
  // console.log(sortA)
  for (let i = 0; i <= sortA.length; i++) {
    // console.log(sortA[i])
    if (sortA.includes(min)) {
      min += 1;
      // console.log('this number',min)
    } else {
      // console.log('this is the number we want',min)
      return min;
    }
  }
}

console.log(lowInt(a));
