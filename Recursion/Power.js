// Power u will be given x and n , find x raise to power n

const power = function (x, n) {
  if (n === 0) return 1;
  let res = x * power(x, n - 1);
  return res;
};

console.log(power(3, 3));
