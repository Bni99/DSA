//Find first occurence of any data in an array

const findFirstIndex = function (arr, index, data) {
  if (arr[index] === data) return index;
  if (index === arr.length - 1) return -1;
  else return findFirstIndex(arr, index + 1, data);
};

console.log(findFirstIndex([2, 3, 4, 7, 4, 5, 6, 3, 2, 5], 0, 22));
