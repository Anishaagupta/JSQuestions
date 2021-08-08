let arr = [3, 5, 2, 3, 2, 8, 9, 3, 0, 1];
// using bubble sort, this array is sorted in ascending order
const sortArr = arr => {
  let answer = false;
  while (!answer) {
    answer = true;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        answer = false;
        let x = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = x;
      }
    }
  }
  return arr;
};
// using selection sort
console.log("sorted arr", sortArr(arr));
