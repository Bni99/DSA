// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

const sumOfNNumbers = function (num) {
  if (num === 1) return 1;
  let res = num + sumOfNNumbers(num - 1);
  return res;
};

console.log(sumOfNNumbers(6));
