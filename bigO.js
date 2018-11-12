function countUpAndDown(n) {
  console.log("Going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("at the top \nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("back down. bye!");
}
