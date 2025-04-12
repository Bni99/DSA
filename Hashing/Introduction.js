//So Hashing is like creating a hash array and doing one operation instaed of doing it multiple times
//Suppose you are given an array and you are asked how many times an element appears lets do this in simple way first

const numberOfTimesElementAppears = function (arr, data) {
  let ctr = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data) ctr++;
  }
  return ctr;
};

console.log(numberOfTimesElementAppears([1, 2, 6, 4, 3, 5, 7, 9, 0], 7));

// Now its time complexity is simple right like it will be O(N)
//But suppose they ask like Q times so complexity will become O(N*Q)
//Here we can use hashing

const computeHashFirst = function (arr) {
  const hashArray = new Array(10).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hashArray[arr[i]]++;
  }
  return hashArray;
};

const hashArray = computeHashFirst([1, 2, 6, 4, 3, 5, 7, 9, 0]);

const numberOfTimesElementAppearsHashing = function (data) {
  return hashArray[data];
};

console.log(numberOfTimesElementAppearsHashing(8));

//so here you can see the complexity reduced to O(N) directly

//lets talk about character hashing
//given a string s= "ahkahdkahdks" i want again to get frequency of characters

const computeCharacterHash = function (str) {
  let newArr = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    newArr[str.charCodeAt(i) - 97]++;
  }
  return newArr;
};

const characterHash = computeCharacterHash("abcdef");

const numberOfTimeCharacterAppearing = function (char) {
  return characterHash[char.charCodeAt(0) - 97];
};

console.log(numberOfTimeCharacterAppearing("k"));

//Basic Introduction of Map

const myMap = new Map();
myMap.set("akriti", 25);
myMap.set("anki", 24);
console.log(myMap.get("anki"), myMap.size);

//Setting Map for calculating the number frequency

const hashMap = new Map();
let arr = [1, 2, 3, 4, 5, 3, 2, 1, 33];
for (let num of arr) {
  if (hashMap.get(num)) {
    hashMap.set(num, hashMap.get(num) + 1);
  } else {
    hashMap.set(num, 1);
  }
}

for (let [key, value] of hashMap) {
  console.log(`${key}: ${value}`);
}

//Setting Map to calculate character frequency

const charHashMap = new Map();
let charStr = "gdajhgdjhadh";

for (let char of charStr) {
  if (charHashMap.get(char)) {
    charHashMap.set(char, charHashMap.get(char) + 1);
  } else {
    charHashMap.set(char, 1);
  }
}

for (let [key, value] of charHashMap) {
  console.log(`${key} :${value}`);
}
