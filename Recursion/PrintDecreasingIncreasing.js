//we want to print first decreasing then increasing suppose if i pass 6 , this should be the output :
// 6
// 5
// 4
// 3
// 2
// 1
// 1
// 2
// 3
// 4
// 5
// 6

const printDecreasingIncreasing = function (num) {
  if (num === 0) return;
  console.log(num);
  printDecreasingIncreasing(num - 1);
  console.log(num);
};

printDecreasingIncreasing(6);
