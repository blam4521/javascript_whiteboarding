function binarySearch(arr, elem) {
  // first grab the two pointers, one start and one end.
  // Start with the Index.
  var start = 0;
  var end = arr.length - 1;
  // Find the middle/ average to get a int.
  var middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);
  //If the middle is not what we are looking for, keeping looking.
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    // Calculate new middle
    middle = Math.floor((start + end) / 2);
    console.log(
      "This is what the list looks like at every iteration:",
      start,
      middle,
      end
    );
  }

  //  We need one final check if the arr[middle] is equal to the elem
  // otherwise it would go to infinite.
  if (arr[middle] === elem) {
    console.log(`found ${elem} at index of ${middle}`);
    return middle;
  } else {
    return -1;
  }
}

binarySearch([2, 3, 6, 9, 13, 15, 28, 30], 28);

//Ouput of every step.
// [2, 3, 6, 9, 13, 15, 28, 30]
//  S        M              E
// [2, 3, 6, 9, 13, 15, 28, 30]
//               S   M        E
