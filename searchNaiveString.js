// A O(n^2) way for searching for a substring pattern in a larger string set.
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      // You want to see the short[j] value matches the long[i + j] because
      // long[i + j] is the next letter in the long index.  Also the reason
      // why you break if it hasn't found a second or even a first match, don't
      // waste your time looping through the rest.
      if (short[j] !== long[i + j]) {
        console.log("BREak");
        // Break will reset the counter to zero.
        break;
      }
      if (j === short.length - 1) {
        console.log("Fount one");
        count++;
      }
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");
