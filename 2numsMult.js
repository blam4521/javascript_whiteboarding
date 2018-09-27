function twoMult(arr, M) {
  let mult = [];
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    let multi = M / arr[i];
    console.log(multi);

    if (hashTable[multi.toString()] !== undefined) {
      // console.log('this too', arr[i])
      console.log("this", hashTable[multi.toString()] !== undefined);

      mult.push([arr[i], multi]);
    }

    hashTable[arr[i].toString()] = arr[i];
  }
  console.log(hashTable);
  return mult;
}

console.log(twoMult([1, 4, 5, -4, 9], 9));
