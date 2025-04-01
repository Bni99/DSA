const allIndices = function (arr, index, data, resultant = []) {
  if (index === arr.length) return resultant;
  if (arr[index] === data) resultant.push(index);
  return allIndices(arr, index + 1, data, resultant);
};

console.log(allIndices([2, 3, 6, 9, 8, 3, 2, 3, 6, 4], 0, 6));
