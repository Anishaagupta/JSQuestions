var givenArray = [3, 10, 10, 10, 2, 3, 10, 3, 10, 2, 4, 9, 3];
var mostFrequent = 1;
var numberOfOccurrence = 0;
var item;
for (var i = 0; i < givenArray.length; i++) {
  for (var j = i; j < givenArray.length; j++) {
    if (givenArray[i] == givenArray[j]) numberOfOccurrence++;
    if (mostFrequent < numberOfOccurrence) {
      mostFrequent = numberOfOccurrence;
      item = givenArray[i];
    }
  }
  numberOfOccurrence = 0;
}
console.log(`${item}, ${mostFrequent} times`);
