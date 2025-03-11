// Problem Statement: Given an integer N, return all divisors of N.

// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

const printAllDivisors = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    num % i === 0 && result.push(i);
  }
  return result;
};

console.log(printAllDivisors(36));
