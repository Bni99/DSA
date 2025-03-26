// So you will provide an array and index and if you pass 0 it means you expect it to print every element but in reverse

const displayAnArrayInReverse = function (arr, index) {
  if (index === arr.length) return;
  displayAnArrayInReverse(arr, index + 1);
  console.log(arr[index]);
};
displayAnArrayInReverse([1, 2, 3, 4, 5], 2);
