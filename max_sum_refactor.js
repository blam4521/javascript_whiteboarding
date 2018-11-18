// Block body arrow function you need to explicity
// use return.
let maxSubarray = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  // Case where the arr is smaller then the num, return
  // null value.
  if (arr.length < num) {
    return null;
  }
  // Grab the first three values of the array and sum it up to store in temp.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.sum(maxSum, tempSum);
  }
  return maxSum;
};

maxSubarray([1, 2], 2);
