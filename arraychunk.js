const chunk = (arr, size) => {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
};

module.exports = chunk;

console.log(chunk([1, 2, 3, 4], 2));
