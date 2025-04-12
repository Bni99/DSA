const highestFrequency = function (arr) {
  let myMap = new Map();
  for (let num of arr) {
    if (myMap.get(num)) {
      myMap.set(num, myMap.get(num) + 1);
    } else {
      myMap.set(num, 1);
    }
  }
  let highestFrequencyNum = null;
  let highestFrequencyNumFreq = Number.NEGATIVE_INFINITY;
  for (let [num, freq] of myMap) {
    if (freq > highestFrequencyNumFreq) {
      highestFrequencyNumFreq = freq;
      highestFrequencyNum = num;
    }
  }
  return highestFrequencyNum;
};
console.log(highestFrequency([1, 2, 3, 2, 2, 9, 3]));

const lowestFrequency = function (arr) {
  let myMap = new Map();
  for (let num of arr) {
    if (myMap.get(num)) {
      myMap.set(num, myMap.get(num) + 1);
    } else {
      myMap.set(num, 1);
    }
  }
  let lowestFrequencyNum = null;
  let lowestFrequencyNumFreq = Number.POSITIVE_INFINITY;
  for (let [num, freq] of myMap) {
    if (freq < lowestFrequencyNumFreq) {
      lowestFrequencyNumFreq = freq;
      lowestFrequencyNum = num;
    }
  }
  return lowestFrequencyNum;
};
console.log(lowestFrequency([1, 2, 3, 2, 2, 9, 3]));
