const printFibonacci = function (num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1 || num === 2) {
    return 1;
  }
  const res = printFibonacci(num - 1) + printFibonacci(num - 2);
  return res;
};

console.log(printFibonacci(5));
