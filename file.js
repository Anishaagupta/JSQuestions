let arr = [3, 2, 1, 8, 5, 7, 9, 2, 8];
const duplicate = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i + 1]) {
      return newArr.push(arr[i]);
    }
  }
};
console.log("result arr", duplicate(arr));
