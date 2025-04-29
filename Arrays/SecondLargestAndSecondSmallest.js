// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

// Example 1:
// Input: [1,2,4,7,7,5]
// Output: Second Smallest : 2
// 	Second Largest : 5
// Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

// Example 2:
// Input: [1]
// Output: Second Smallest : -1
// 	Second Largest : -1
// Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

const getSecondLargest = function (arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }
  return secondLargest;
};

const getSecondSmallest = function (arr) {
  let smallest = Number.POSITIVE_INFINITY;
  let secondSmallest = Number.POSITIVE_INFINITY;
  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num > smallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
};

//O(N)
const secondLargestSecondSmallest = function (arr) {
  if (arr.length <= 1 || new Set(arr).size === 1) return [-1, -1];
  else {
    return [getSecondLargest(arr), getSecondSmallest(arr)];
  }
};

console.log(secondLargestSecondSmallest([1, 2, 1, 4, 7, 7, 5]));
console.log(secondLargestSecondSmallest([10, 10, 10]));
