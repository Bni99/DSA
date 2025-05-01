// Example 1:
// Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

// Example 2:
// Input: 1,2,0,1,0,4,0
// Output: 1,2,1,4,0,0,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

const bruteApproach = function (arr) {
  const extraSpace = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) extraSpace.push(arr[i]);
  }
  for (let i = extraSpace.length; i < arr.length; i++) {
    extraSpace.push(0);
  }
  return extraSpace;
};

console.log(bruteApproach([1, 0, 2, 3, 0, 4, 0, 1]));

const optimalApproach = function (arr) {
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) return arr;
  else {
    let i = j + 1;
    while (i < arr.length) {
      if (arr[i] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j++;
      }
      i++;
    }
  }
  return arr;
};
console.log(optimalApproach([1, 0, 2, 3, 0, 4, 0, 1]));
