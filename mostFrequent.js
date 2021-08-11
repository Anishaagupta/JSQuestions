function mostFrequent(arr, n) {
  // Sort the array
  arr.sort();

  // find the max frequency using linear
  // traversal
  let max_count = 1,
    res = arr[0];
  let curr_count = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] == arr[i - 1]) curr_count++;
    else {
      if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[i - 1];
      }
      curr_count = 1;
    }
  }

  // If last element is most frequent
  if (curr_count > max_count) {
    max_count = curr_count;
    res = arr[n - 1];
  }
  return res;
}

// Driver Code

let arr = [
  1, 5, 2, 5, 4, 2, 8, 5, 9, 4, 34, 4, 24, 4, 12, 4, 1, 5, 2, 5, 4, 2, 8, 5, 9,
];
let n = arr.length;
console.log(mostFrequent(arr, n));
