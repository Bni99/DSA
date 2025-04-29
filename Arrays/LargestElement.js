//Given an array, we have to find the largest element in the array.

//O(NLOGN)
const largestElement = function (arr) {
  arr.sort((a, b) => a - b);
  return arr.at(-1);
};

console.log(largestElement([2, 1, 3, 4, 5, -1]));

//O(N)
const optimizedLargestElement = function (arr) {
  let largestElement = Number.NEGATIVE_INFINITY;
  for (let num of arr) {
    if (num > largestElement) largestElement = num;
  }
  return largestElement;
};

console.log(optimizedLargestElement([2, 1, 3, 4, 23, 5, -1]));
