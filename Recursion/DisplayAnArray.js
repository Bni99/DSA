// So you will provide an array and index and if you pass 0 it means you expect it to print every element starting from zero

const displayAnArray = function (arr, index) {
  if (index === arr.length) return;
  console.log(arr[index]);
  displayAnArray(arr, index + 1);
};
displayAnArray([1, 2, 3, 4, 5], 0);
