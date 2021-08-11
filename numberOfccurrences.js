let givenArray = [3, 10, 10, 10, 2, 3, 10, 3, 10, 2, 4, 9, 3];
let item = 0;
let mostFrequent = 1;
const frequent = givenArray => {
  let numberOfOccurrence = 0;
  for (let i = 0; i < givenArray.length; i++) {
    for (let j = i; j < givenArray.length; j++) {
      if (givenArray[i] == givenArray[j]) numberOfOccurrence++;
      if (mostFrequent < numberOfOccurrence) {
        mostFrequent = numberOfOccurrence;
        item = givenArray[i];
      }
    }
    numberOfOccurrence = 0;
  }
  return numberOfOccurrence;
};
console.log("result", frequent(givenArray));
console.log(`${item}, ${mostFrequent} times`);
