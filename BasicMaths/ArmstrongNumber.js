// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

const numberOfDigits = (num) => {
  let ctr = 0;
  while (num > 0) {
    ctr++;
    num = Math.trunc(num / 10);
  }
  return ctr;
};

const isArmstrongNumber = (num) => {
  const originalNumber = num;
  const digits = numberOfDigits(num);
  let result = 0;
  while (num > 0) {
    result = result + Math.pow(num % 10, digits);
    num = Math.trunc(num / 10);
  }
  return originalNumber === result ? true : false;
};

console.log(isArmstrongNumber(3271));
