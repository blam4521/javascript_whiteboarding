function capWords(stringA) {
  let arr = stringA.split(" ");
  console.log(arr);

  arr.forEach(function(element) {
    console.log(element.charAt(0).toUpperCase() + element.slice(1));
  });
}

capWords("a bear sits");
