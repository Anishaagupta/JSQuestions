const palindrome = (str1, str2) => {
  let newStr1 = str1.split("").join(",");
  let newStr2 = str2.split("").reverse().join(",");
  console.log("newStr1", newStr1);
  console.log("newStr2", newStr2);
  if (newStr1 === newStr2) {
    return "Given string is palindrome";
  }
  return "Given string is not palindrome";
};

console.log("palindrome", palindrome("pool", "loop"));
console.log("palindrome", palindrome("listen", "silent"));

// Second Method

const checkPalindrome = (str1, str2) => {
  let x = str1.toLowerCase().replace(/[^a-z]+/g, "");
  let y = str2.toLowerCase().replace(/[^a-z]+/g, "");
  console.log("x", x);
  console.log("y", y);
  let newStr1 = x.toLowerCase().split("").join(",");
  let newStr2 = y.toLowerCase().split("").reverse().join(",");
  console.log("newStr1", newStr1);
  console.log("newStr2", newStr2);
  if (newStr1 === newStr2) {
    return "Given string is Palindrome";
  }
  return "Given string is not Palindrome";
};

console.log("checkPalindrome", checkPalindrome("poo%l", "lo%op"));
console.log("checkPalindrome", checkPalindrome("listen", "silent"));
