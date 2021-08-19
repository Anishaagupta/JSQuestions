const anagram = (str1, str2) => {
  let newStr1 = str1.split("").sort().join(",");
  let newStr2 = str2.split("").sort().join(",");
  console.log("newStr1", newStr1);
  console.log("newStr2", newStr2);
  if (newStr1 === newStr2) {
    return "Given string is Anagram";
  }
  return "Given string is not Anagram";
};

console.log("anagram", anagram("pool", "polo"));
console.log("anagram", anagram("listen", "silent"));
