// A number n is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 1, 2, 6, 24, 120,
// Given a number n, the task is to return the list/vector of the factorial numbers smaller than or equal to n.

// Ex : n=6 ,Output: 1 2 6

const factorialLessThanN = function (num) {
  let m = 1;
  let res = [];
  while (m <= num) {
    if (m === 1) res.push(m);
    if (res[m - 2] * m <= num) res.push(res[m - 2] * m);
    else if (res[m - 2] * m > num) {
      break;
    }
    m++;
  }
  console.log(res);
};

factorialLessThanN(3);
