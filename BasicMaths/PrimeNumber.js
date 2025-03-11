// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

const isPrime = function (num) {
  let ctr = 0;
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    num % i === 0 && ctr++;
  }
  return ctr > 0 ? false : true;
};

console.log(isPrime(1));
