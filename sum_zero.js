// Dumbass version, O(n^2).
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log([arr[i], arr[j]], true);
        return [arr[i], arr[j]];
      } else {
        console.log([arr[i], arr[j]], false);
      }
    }
  }
}

// Smarter solution using O(n).
// Two pointers.
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-2, -1, 0, 1, 2]);
