// Example 2:
// Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.

const reverse = function (arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

const trickSolution = function (arr, k) {
  reverse(arr, 0, arr.length - 1);
  reverse(arr, arr.length - k, arr.length - 1);
  reverse(arr, 0, arr.length - k - 1);
  console.log(arr);
};
console.log(trickSolution([1, 2, 3, 4, 5, 6, 7], 2));
