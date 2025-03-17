//Print increasing numbers upto 1 like , if we pass 5 , we want 1,2,3,4,5

const printIncreasing = function (num) {
  if (num === 0) return;
  printIncreasing(num - 1);
  console.log(num);
};
printIncreasing(12);
