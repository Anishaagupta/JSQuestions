let arr = [1, 2, 6, 6, 3, 9, 2, 4, 54, 42, 67, 5, 9, 9, 0];

const maxNum = arr => {
  let filterArr = arr.filter((v, i) => arr.indexOf(v) === i);
  let answer = false;
  while (!answer) {
    answer = true;
    for (let i = 0; i < filterArr.length; i += 1) {
      if (filterArr[i - 1] > filterArr[i]) {
        answer = false;
        let x = filterArr[i - 1];
        filterArr[i - 1] = filterArr[i];
        filterArr[i] = x;
      }
    }
  }
  let maxNum = filterArr[filterArr.length - 2];
  return maxNum;
};
maxNum(arr);
console.log("arr", maxNum(arr));
