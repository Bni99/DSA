//Get the factorial

const factorial = function (num) {
  if (num === 1) return 1;
  let res = factorial(num - 1) * num;
  return res;
};

console.log(factorial(5));
