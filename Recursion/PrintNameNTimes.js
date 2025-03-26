//Print Bni N times

const printNameNTimes = function (num) {
  if (num === 0) return;
  console.log("bni");
  printNameNTimes(num - 1);
};

printNameNTimes(3);
