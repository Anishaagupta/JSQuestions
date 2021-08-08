let arr = [3, 2, 1, 8, 5, 7, 9, 2, 8];
const duplicate = arr => {
  let result = arr.filter((value, i) => arr.indexOf(value) === i);
  return result;
};
console.log("result arr", duplicate(arr));
