// Example 1:

// Input: arr[1,1,2,2,2,3,3]

// Output: arr[1,2,3,_,_,_,_]

// Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.

//O(N) but we used a set
const bruteApproach = function (arr) {
  const uniqueArray = [...new Set(arr)];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = uniqueArray[i];
  }
  return uniqueArray.length;
};
console.log(bruteApproach([1, 1, 2, 2, 2, 3, 3]));

const optimalApproach = function (arr) {
  let i = 0,
    j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
};
console.log(optimalApproach([1, 1, 2, 2, 2, 3, 3]));
