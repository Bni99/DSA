//Find max of an array using recursion

const findMax = function (arr, index) {
  if (index === arr.length - 1) return arr[arr.length - 1];
  let maxTemp = findMax(arr, index + 1);
  if (maxTemp > arr[index]) return maxTemp;
  else return arr[index];
};

console.log(findMax([1, 2, 13, 43, 5], 0));
