let arr = [1, 4, 3, 7, 6, 39, 4, 32, 4, 2, 13, 16, 76];
// sort the array using bubble sort in descending order

const descOrder = input => {
  let answer = false;

  while (!answer) {
    answer = true;
    for (let i = 0; i < input.length; i += 1) {
      if (input[i - 1] < input[i]) {
        answer = false;
        let x = input[i - 1];
        input[i - 1] = input[i];
        input[i] = x;
      }
    }
  }

  return input;
};
let result = descOrder(arr);
console.log("new arr", result);
