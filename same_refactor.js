function same(arr1, arr2) {
  // Think trivial cases, if the lengths of the array are not
  // equal then immediately kick them out of the function.
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Magic happens here you use dicts to store the data so you can have
  //O(1) time to read the data.
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // Another way of for looping in es6.
  for (let val of arr1) {
    console.log(`val: ${val}`);
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    console.log(`val2: ${val}`);
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // Don't even give a shit about the value, its all about the keys
  // since you are comparing them.
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      console.log(`First if block ${key}`);
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      console.log(`Second if block ${key}`);
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9]));
