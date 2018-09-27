function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    // console.log(i)
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
    // console.log(fibnum)
  }
  return result[n];
}

console.log(fib(3));
