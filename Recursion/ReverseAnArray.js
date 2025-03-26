//Reverse an array
// Example 1:
// Input: N = 5, arr[] = {5,4,3,2,1}
// Output: {1,2,3,4,5}

const reverse = (arr, start, end) => {
  if (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverse(arr, ++start, --end);
  }
};

const reverseAnArray = (arr) => {
  reverse(arr, 0, arr.length - 1);
  return arr;
};

console.log(reverseAnArray([5, 4, 3, 2, 1]));
