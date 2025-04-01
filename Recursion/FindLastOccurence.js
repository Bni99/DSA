//Find last occurence of any data in an array

const findLastOccurence = function (arr, index, data) {
  if (index === arr.length) return -1;
  const lastOccurenceIndex = findLastOccurence(arr, index + 1, data);
  if (lastOccurenceIndex === -1) {
    if (arr[index] === data) return index;
    else return -1;
  } else {
    return lastOccurenceIndex;
  }
};

console.log(findLastOccurence([2, 3, 4, 7, 4, 5, 6, 3, 2, 5], 0, 33));
