//Print decreasing numbers upto 1 like , if we pass 5 , we want 5 ,4 ,3, 2,1

const printDecreasing = function (num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  printDecreasing(num - 1);
};

printDecreasing(12);
