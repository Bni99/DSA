//Power using logarithmic given x and n find x raise to power n but using logarithmic approach

const powerUsingLogarithmic = function (x, n) {
  let res;
  if (n === 0) return 1;
  if (n % 2 === 0) {
    res =
      powerUsingLogarithmic(x, Math.trunc(n / 2)) *
      powerUsingLogarithmic(x, Math.trunc(n / 2));
  } else {
    res =
      powerUsingLogarithmic(x, Math.trunc(n / 2)) *
      powerUsingLogarithmic(x, Math.trunc(n / 2)) *
      x;
  }
  return res;
};

console.log(powerUsingLogarithmic(6, 3));
