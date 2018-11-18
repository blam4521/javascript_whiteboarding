// recursion
function printNumber(n) {
  // set the base case otherwise it will gone on forever
  if (n === 0) {
    console.log(`n is done ${n}`);
    return 0;
  }
  console.log(n);
  return printNumber(n - 1);
}
// Call stack, use it in chrome.
// printNumber(3);
//         return printNumber(2);
//                 return printNumber(1);
//                                 return 0;

// Factorial both with for loop and recursion.
// For loop
// function factorial(num) {
//     let total = 1
//     for(let i=num; i> 1; i--){
//         total*= i
//     }
//     return total
// }

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // Need this to keep reducing the array.
    // [1, 3, 5, 4].splice(1) => [3, 5, 4]
    // [3, 5, 4].splice(1) => [5, 4]
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}
