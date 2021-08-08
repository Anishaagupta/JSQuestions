//Hoisting
//Hoisting is a JavaScript mechanism where variables and function
//declarations are moved to the top of their scope before code execution.
// Js only hoist decalarations nt inittializations
console.log("check", x);
var x;
x = 10; // result uindefined

y = 20;
console.log("check", y); // getting 20 in result
var y;

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
// max number in an array
let final = result.slice(0, 1);
console.log("new arr", result);
console.log("new arr", final);
